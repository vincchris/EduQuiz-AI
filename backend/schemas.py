from pydantic import BaseModel

# ---------------- Essay ----------------
class EssayBase(BaseModel):
    student_id: str
    soal: str
    jawaban: str
    prediction: str

class EssayCreate(EssayBase):
    pass

class EssayResponse(EssayBase):
    id: int

    class Config:
        orm_mode = True


# ---------------- Multiple Choice ----------------
class MCBase(BaseModel):
    student_id: str
    soal: str
    opsi: str
    prediction: str

class MCCreate(MCBase):
    pass

class MCResponse(MCBase):
    id: int

    class Config:
        orm_mode = True
