from fastapi import APIRouter

router = APIRouter(prefix="/career", tags=["Career"])

@router.get("/recommendations")
async def get_career_recommendations():
    return {"message": "Career recommendations based on AI"}
