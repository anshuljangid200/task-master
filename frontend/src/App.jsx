import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, CheckCircle, Clock, AlertCircle, BookOpen } from 'lucide-react';
import './App.css';

const API_BASE = '/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API_BASE}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/tasks`, newTask);
      setTasks([response.data, ...tasks]);
      setNewTask({ title: '', description: '', priority: 'medium' });
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (task) => {
    const newStatus = task.status === 'completed' ? 'pending' : 'completed';
    try {
      const response = await axios.put(`${API_BASE}/tasks/${task.id}`, { status: newStatus });
      setTasks(tasks.map(t => t.id === task.id ? response.data : t));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_BASE}/tasks/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="logo"
        >
          <BookOpen className="icon-sparkle" size={40} />
          <h1>PulseTask</h1>
        </motion.div>
        <p className="subtitle">— Refined Task Management with Classic Precision —</p>
      </header>

      <main className="content">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="task-form-section"
        >
          <form onSubmit={addTask} className="glass-card task-form">
            <h2>New Task</h2>
            <input
              type="text"
              placeholder="What needs to be done?"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              autoFocus
            />
            <textarea
              placeholder="Description (optional)"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <div className="form-footer">
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
              <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : <><Plus size={18} /> Add Task</>}
              </button>
            </div>
          </form>
        </motion.section>

        <section className="task-list-section">
          <h2>Your Tasks</h2>
          <div className="task-list">
            <AnimatePresence>
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={`task-card glass-card ${task.status === 'completed' ? 'completed' : ''}`}
                >
                  <div className="task-header">
                    <button
                      className="status-toggle"
                      onClick={() => toggleStatus(task)}
                    >
                      {task.status === 'completed' ? <CheckCircle className="check-icon" /> : <Clock />}
                    </button>
                    <div className="task-info">
                      <h3>{task.title}</h3>
                      <p>{task.description}</p>
                    </div>
                    <div className={`priority-badge ${task.priority}`}>
                      {task.priority}
                    </div>
                  </div>
                  <div className="task-actions">
                    <button onClick={() => deleteTask(task.id)} className="delete-btn">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {tasks.length === 0 && (
              <div className="empty-state">
                <AlertCircle size={48} />
                <p>No tasks yet. Start by creating one above!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
