from sqlalchemy import Column, Integer, String, Text, TIMESTAMP, func
from database import Base

class PredictionEssay(Base):
  __tablename__ = "prediction_essay"

  id = Column(Integer, primary_key=True, index=True)
  student_id = Column(String(50), index=True)
  soal = Column(Text, nullable=False)
  jawaban = Column(Text, nullable=False)
  prediction = Column(Text, nullable=False)
  created_at = Column(TIMESTAMP, server_default=func.now())

class PredictionMC(Base):
  __tablename__ = "prediction_mc"

  id = Column(Integer, primary_key=True, index=True)
  student_id = Column(String(50), index=True)
  soal = Column(Text, nullable=False)
  opsi = Column(String(255), nullable=False)
  prediction = Column(String(255), nullable=False)
  created_at = Column(TIMESTAMP, server_default=func.now())