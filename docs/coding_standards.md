# PulseTask Coding Standards

## Backend (Python/Flask)
- **Modularity**: Keep routes, models, and logic separated (started as unified for brevity, but scalable).
- **Naming**: Use `snake_case` for variables and functions, `PascalCase` for classes.
- **Error Handling**: Always return appropriate HTTP status codes and JSON error messages.
- **Documentation**: Use docstrings for complex logic.

## Frontend (React)
- **Component-Based**: UI should be broken into reusable components.
- **Modern CSS**: Use CSS variables for themes. Focus on premium aesthetics (glassmorphism, soft shadows).
- **State Management**: Use React Hooks (`useState`, `useEffect`) for local state. Use context if needed for global state.
- **Animations**: Use `framer-motion` for micro-interactions.

## Database
- **Relational**: Use SQLAlchemy ORM for all database interactions.
- **Migrations**: (Planned) Use Flask-Migrate for schema updates.
