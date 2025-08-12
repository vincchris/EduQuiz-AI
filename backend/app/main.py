import os
import joblib
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
from models import EssayPrediction
from sklearn.feature_extraction.text import TfidfVectorizer
from sqlalchemy.exc import SQLAlchemyError

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()

MODEL_PATH = 
app = FastAPI()