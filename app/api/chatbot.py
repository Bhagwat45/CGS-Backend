from fastapi import APIRouter, HTTPException
from app.schemas.chatbot_schema import ChatRequest, ChatResponse
from app.services.ai_service import get_chatbot_response

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

@router.post("/chat", response_model=ChatResponse)
async def chat_with_mentor(request: ChatRequest):
    """
    Send a message to the AI career mentor and get a response.
    Supports chat history for context.
    """
    try:
        reply = await get_chatbot_response(request.message, request.history)
        return ChatResponse(response=reply)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get AI response: {str(e)}")
