# PulseTask - Modern Task Management System

PulseTask is a sleek, AI-inspired task management application built for the Better Software assessment. It features a robust Python/Flask backend and a premium, responsive React frontend.

## 🚀 Features
- **Project Structure**: Clean separation of Backend and Frontend.
- **Relational Database**: Uses SQLite (SQLAlchemy) for reliable data persistence.
- **Premium UI**: Dark mode, glassmorphism, and smooth animations using `framer-motion`.
- **Priority System**: Task organization by priority levels.
- **Micro-Interactions**: Real-time status toggles and deletion with visual feedback.

## 🛠️ Tech Stack
- **Backend**: Python 3.x, Flask, SQLAlchemy, Flask-CORS
- **Frontend**: React (Vite), Axios, Framer Motion, Lucide React
- **Database**: SQLite (Relational)

## 📦 Setup Instructions

### Backend
1. Navigate to the `backend` folder.
2. Create a virtual environment: `python -m venv venv`.
3. Activate it:
   - Windows: `.\venv\Scripts\activate`
   - Unix/macOS: `source venv/bin/activate`
4. Install dependencies: `pip install flask flask-sqlalchemy flask-cors python-dotenv`.
5. Run the server: `python app.py`. (The server runs on `http://localhost:5000`).

### Frontend
1. Navigate to the `frontend` folder.
2. Install dependencies: `npm install`.
3. Start the dev server: `npm run dev`. (The app runs on `http://localhost:5173`).

## 🧠 Technical Decisions
- **Vite over CRA**: Faster build times and better DX.
- **SQLAlchemy**: Provides a powerful ORM layer, making it easy to switch to PostgreSQL if needed.
- **CSS Modules/Vanilla CSS**: Chose for maximum control over the "premium" feel without the overhead of heavy UI libraries.
- **Framer Motion**: Essential for the fluid, "alive" feel of a modern product.

## 🛑 Risks & Mitigation
- **Local SQLite**: While suitable for this assessment, SQLite has concurrency limits. For production, PostgreSQL is recommended.
- **State Management**: Using local React state is fine for this scale, but Redux or Zustand would be preferred for larger feature sets.

## 🔮 Future Extensions
- **AI Insights**: Integrate OpenAI/Anthropic API to suggest task breakdowns or estimate completion times.
- **User Authentication**: Implement JWT-based auth for personal task boards.
- **Collaboration**: Real-time task sharing using WebSockets.
