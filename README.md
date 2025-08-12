# 🎓 EduQuiz AI — Sistem Prediksi Jawaban Soal untuk Membantu Siswa

## 📌 Deskripsi Proyek
**EduQuiz AI** adalah sistem berbasis Machine Learning yang dirancang untuk membantu siswa dalam memahami dan memprediksi jawaban soal pilihan ganda atau esai.

Aplikasi ini memiliki dua komponen utama:
1. **Backend (FastAPI)** → Meng-handle request dari Frontend, memuat model Machine Learning, melakukan prediksi, dan menyimpan data ke **MySQL**.
2. **Frontend (Next.js)** → Antarmuka pengguna interaktif yang memudahkan siswa memasukkan soal dan mendapatkan prediksi secara real-time.

💡 Proyek ini bertujuan membantu siswa belajar lebih efektif dengan memberikan rekomendasi jawaban yang relevan berdasarkan model AI yang telah dilatih.

---

## 🛠️ Teknologi yang Digunakan
### **Backend (FastAPI)**
- **Python 3.10+**
- **FastAPI** (framework backend)
- **scikit-learn** (machine learning)
- **joblib / pickle** (serialisasi model)
- **mysql-connector-python** (koneksi database MySQL)
- **pydantic** (validasi input/output)
- **uvicorn** (server ASGI)

### **Frontend (Next.js)**
- **React + Next.js**
- **Tailwind CSS** (UI styling)
- **Axios** (HTTP request ke backend)
- **Vercel** (opsional, untuk deploy FE)

---

## 📂 Struktur Proyek
EduQuizAI/
│
├── backend/
│ ├── main.py # Entry point FastAPI
│ ├── routers/
│ │ ├── predict.py # Endpoint prediksi
│ │ ├── database.py # Koneksi MySQL
│ │ └── models.py # Model tabel database
│ ├── artifacts/
│ │ ├── model.joblib
│ │ ├── vectorizer.joblib
│ │ └── label_encoder.pkl
│ └── requirements.txt
│
├── frontend/
│ ├── pages/
│ │ ├── index.js # Halaman utama input soal
│ │ └── result.js # Halaman hasil prediksi
│ ├── components/ # UI components
│ └── package.json
│
└── README.md

---

## 🚀 Cara Menjalankan Proyek

### 1️⃣ Clone Repository
```bash
git clone https://github.com/username/eduquiz-ai.git
cd eduquiz-ai


## Setup BACKEND
cd backend
python -m venv venv
source venv/bin/activate  # MacOS/Linux
venv\Scripts\activate     # Windows

pip install -r requirements.txt
uvicorn main:app --reload

# SETUP FRONTEND
cd ../frontend
npm install
npm run dev

🎯 Tujuan dan Manfaat
Membantu siswa memahami materi dengan latihan soal interaktif.

Memberikan rekomendasi jawaban berdasarkan pembelajaran mesin.

Menyimpan data untuk evaluasi guru atau analisis lebih lanjut.

Mempercepat proses belajar mandiri.

