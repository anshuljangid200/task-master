# Walkthrough Outline - PulseTask Submission

This document serves as a guide for the 10-15 minute walkthrough required for the Better Software assessment.

## 1. Introduction (& Project Structure)
- **PulseTask**: A modern task management app.
- **Structure**:
  - `backend/`: Flask API, SQLite database integration.
  - `frontend/`: Vite-powered React app.
  - `docs/`: AI guidelines and coding standards.

## 2. Technical Stack & Architecture
- **Backend (Python/Flask)**: Selected for its simplicity and robustness in building APIs.
- **Frontend (React)**: High performance with Vite. Used `framer-motion` for that "premium" feel.
- **Database**: Relational (SQLite) via SQLAlchemy. Explain the `Task` model and how CRUD operations are handled via REST endpoints.

## 3. UI/UX Walkthrough
- Demonstrate adding a task with priority.
- Show the glassmorphic cards and hover effects.
- Demonstrate task completion and deletion animations.
- Highlight responsiveness (mobile-friendly grid).

## 4. AI Usage & Guidance
- Explain how AI was used to accelerate development and styling.
- Point to `docs/claude.md` and `docs/coding_standards.md` as the rules established for AI-assisted scaling.

## 5. Risks & Extension Strategy
- **Risk**: SQLite for production. Mitigation: Easy migration to Postgres via SQLAlchemy.
- **Risk**: Limited state management. Mitigation: Introduce Context API or Zustand.
- **Extensions**: Mention "AI Priority Suggestions" – using LLMs to analyze task descriptions and auto-assign priorities.
