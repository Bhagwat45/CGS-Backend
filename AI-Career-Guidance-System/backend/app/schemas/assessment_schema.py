from pydantic import BaseModel
from typing import List, Optional

class QuestionOption(BaseModel):
    id: str
    text: str

class QuestionSchema(BaseModel):
    id: str
    text: str
    category: str
    options: List[QuestionOption]

class AssessmentSubmission(BaseModel):
    user_id: str
    answers: dict[str, str] # question_id -> option_id

class AssessmentResult(BaseModel):
    score: int
    top_careers: List[str]
    feedback: str
