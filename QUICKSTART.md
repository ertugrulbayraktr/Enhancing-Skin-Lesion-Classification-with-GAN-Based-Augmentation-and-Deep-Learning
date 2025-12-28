# 🚀 Quick Start Guide

Projeyi 5 dakikada çalıştırın!

## ✅ Önce Kontrol Edin

```bash
python --version    # Python 3.11+ olmalı
node --version      # Node 18+ olmalı
npm --version       # npm yüklü olmalı
```

## 📥 Adım 1: Proje Klasörüne Gidin

```bash
cd "C:\Users\ertug\Desktop\project canser"
# veya projenin bulunduğu klasör
```

## 🐍 Adım 2: Backend'i Başlatın (Terminal 1)

```bash
# Backend klasörüne gidin
cd backend

# Virtual environment oluşturun (opsiyonel ama önerilen)
python -m venv venv

# Virtual environment'ı aktive edin
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Paketleri yükleyin (sadece ilk kez)
pip install -r requirements.txt

# Backend'i başlatın
python -m uvicorn app.main:app --reload --port 8000
```

**✅ Backend hazır:** http://localhost:8000

**API Docs:** http://localhost:8000/docs

---

## ⚛️ Adım 3: Frontend'i Başlatın (Terminal 2 - YENİ terminal açın)

```bash
# Frontend klasörüne gidin
cd frontend

# Paketleri yükleyin (sadece ilk kez)
npm install

# Frontend'i başlatın
npm run dev
```

**✅ Frontend hazır:** http://localhost:5173

---

## 🎉 Adım 4: Tarayıcıda Açın

http://localhost:5173 adresine gidin ve kullanmaya başlayın!

---

## 🧪 Test Edin

1. Örnek görsellerden birini seçin
2. "Analyze Image" butonuna tıklayın
3. 2-3 saniye bekleyin
4. Sonuçları görün!

---

## 🛑 Durdurmak İçin

Her iki terminalde de `Ctrl + C` tuşlarına basın.

---

## ❓ Sorun mu Yaşıyorsunuz?

### Backend başlamıyor?
```bash
# Model dosyası var mı kontrol edin
ls backend/models/SEResnet_model.pth  # Olmalı

# Port meşgul mü?
# Başka bir port deneyin:
uvicorn app.main:app --reload --port 8001
```

### Frontend başlamıyor?
```bash
# Node modules'ü temizleyin
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tahmin çalışmıyor?
- Backend'in çalıştığından emin olun: http://localhost:8000/docs
- Browser console'da hata var mı kontrol edin (F12)

---

## 📖 Detaylı Dokümantasyon

Daha fazla bilgi için [README.md](README.md) dosyasına bakın.

