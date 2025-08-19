import os
os.environ["KMP_DUPLICATE_LIB_OK"] = "TRUE"

import joblib
import pickle
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

import crud, model, schemas
from database import engine, get_db

# Buat tabel kalau belum ada
model.Base.metadata.create_all(bind=engine)

# Init FastAPI
app = FastAPI()

# Middleware
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000"],  # FE Next.js
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

# Load Models & Vectorizers
ARTIFACT_DIR = os.path.join(os.path.dirname(__file__), "ml_models")

# Essay Model
essay_model = joblib.load(os.path.join(ARTIFACT_DIR, "model.joblib"))
essay_vectorizer = joblib.load(os.path.join(ARTIFACT_DIR, "vectorizer.joblib"))

# Multiple Choice Model
mc_model = joblib.load(os.path.join(ARTIFACT_DIR, "model_mc.pkl"))
mc_vectorizer = joblib.load(os.path.join(ARTIFACT_DIR, "vectorizer_mc.pkl"))
mc_encoder = joblib.load(os.path.join(ARTIFACT_DIR, "label_encoder.pkl"))

# Routes
@app.get("/")
def home():
    return {"message": "Backend FastAPI is running! Use /predict/essay or /predict/mc"}


@app.post("/predict/essay", response_model=schemas.EssayResponse)
def predict_essay(req: schemas.EssayCreate, db: Session = Depends(get_db)):
    X_vec = essay_vectorizer.transform([req.text])
    pred = essay_model.predict(X_vec)
    return crud.create_essay_prediction(db, req, str(pred[0]))


@app.post("/predict/mc", response_model=schemas.MCResponse)
def predict_mc(req: schemas.MCCreate, db: Session = Depends(get_db)):
    text_combination = f"{req.soal} {req.opsi_a} {req.opsi_b} {req.opsi_c} {req.opsi_d}"
    X_vec = mc_vectorizer.transform([text_combination])
    pred = mc_model.predict(X_vec)
    pred_label = mc_encoder.inverse_transform(pred)

    return crud.create_mc_prediction(db, req, pred_label[0])
