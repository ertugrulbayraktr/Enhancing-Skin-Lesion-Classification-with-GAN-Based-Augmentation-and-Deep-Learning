"""
SEResNet Model Definition
Squeeze-and-Excitation ResNet for skin lesion classification
"""

import torch
import torch.nn as nn
from torchvision.models import resnet50, ResNet50_Weights


class SEModule(nn.Module):
    """Squeeze-and-Excitation Module"""
    def __init__(self, channels, reduction=16):
        super().__init__()
        self.avg_pool = nn.AdaptiveAvgPool2d(1)
        self.fc = nn.Sequential(
            nn.Linear(channels, channels // reduction, bias=False),
            nn.ReLU(inplace=True),
            nn.Linear(channels // reduction, channels, bias=False),
            nn.Sigmoid()
        )

    def forward(self, x):
        b, c, _, _ = x.size()
        y = self.avg_pool(x).view(b, c)
        y = self.fc(y).view(b, c, 1, 1)
        return x * y


class SEResNet(nn.Module):
    """SEResNet Model for Image Classification"""
    def __init__(self, num_classes=5, pretrained=False):
        super().__init__()
        self.base = resnet50(weights=ResNet50_Weights.DEFAULT if pretrained else None)

        # Add SE blocks for each ResNet layer stage
        self.se_layer1 = SEModule(256)
        self.se_layer2 = SEModule(512)
        self.se_layer3 = SEModule(1024)
        self.se_layer4 = SEModule(2048)

        # Modify classifier for your class count
        self.base.fc = nn.Sequential(
            nn.Linear(2048, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        # Initial layers
        x = self.base.conv1(x)
        x = self.base.bn1(x)
        x = self.base.relu(x)
        x = self.base.maxpool(x)

        # Layer 1 with SE block
        x = self.base.layer1(x)
        identity = x
        x = self.se_layer1(x)
        x = x + identity

        # Layer 2 with SE block
        x = self.base.layer2(x)
        identity = x
        x = self.se_layer2(x)
        x = x + identity

        # Layer 3 with SE block
        x = self.base.layer3(x)
        identity = x
        x = self.se_layer3(x)
        x = x + identity

        # Layer 4 with SE block
        x = self.base.layer4(x)
        identity = x
        x = self.se_layer4(x)
        x = x + identity

        # Final layers (classifier)
        x = self.base.avgpool(x)
        x = torch.flatten(x, 1)
        x = self.base.fc(x)
        return x

