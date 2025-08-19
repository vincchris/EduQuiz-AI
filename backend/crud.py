from sqlalchemy.orm import Session
import model, schemas

def create_essay_prediction(db: Session, req: schemas.EssayCreate, prediction: str):
    db_entry = model.EssayPrediction(
        soal=req.soal,
        jawaban=req.text,
        prediction=prediction
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry

def create_mc_prediction(db: Session, req: schemas.MCCreate, prediction: str):
    db_entry = model.MCPrediction(
        soal=req.soal,
        opsi_a=req.opsi_a,
        opsi_b=req.opsi_b,
        opsi_c=req.opsi_c,
        opsi_d=req.opsi_d,
        prediction=prediction
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry
