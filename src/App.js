import React, { useState } from 'react';
import './App.css';

const initialProjectData = [
  { name: 'Collect Survey Data', project: 'College Feedback System', priority: 'Medium', progress: 50, milestones: 5 },
  { name: 'Design UI', project: 'College Event Management App', priority: 'Very High', progress: 80, milestones: 4 },
  { name: 'Record Video Demo', project: 'Project Showcase Submission', priority: 'Very High', progress: 30, milestones: 3 },
  { name: 'Build API', project: 'Library Management System', priority: 'Medium', progress: 70, milestones: 6 },
  { name: 'Research on AI Models', project: 'Smart Chatbot for Campus Queries', priority: 'low', progress: 30, milestones: 2 },
  { name: 'Create ER Diagram', project: 'Hostel Room Allocatic System', priority: 'Very High', progress: 40, milestones: 2 },
  { name: 'Prepare PPT', project: 'Final Fee Project Portal', priority: 'medium', progress: 45, milestones: 4 },
];

function App() {
  const [page, setPage] = useState('login');
  const [username, setUsername] = useState('');
  const [projects, setProjects] = useState(initialProjectData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    project: '',
    priority: 'Medium',
    progress: 0,
    milestones: 1,
  });
  const [newUser, setNewUser] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const input = e.target.elements.username.value.trim();
    if (input) {
      setUsername(input);
      setPage('dashboard');
    } else {
      alert('Please enter a username');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const input = e.target.elements.newuser.value.trim();
    if (input) {
      alert(`Signup successful for ${input}. Please login.`);
      setNewUser('');
      setPage('login');
    } else {
      alert('Please enter a username to sign up');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPage('login');
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    setProjects([
      ...projects,
      {
        ...newProject,
        progress: parseInt(newProject.progress),
        milestones: parseInt(newProject.milestones),
      },
    ]);
    setNewProject({ name: '', project: '', priority: 'Medium', progress: 0, milestones: 1 });
    setShowAddForm(false);
  };

  const chartData = projects.map((item) => ({
    project: item.project,
    completion: item.progress,
  }));

  return (
    <div className="app">
      {page === 'login' && (
        <div className="login-container">
          <h1 className="app-title">let's login👇🏻to🚀project management dashboard📊</h1>
          <form onSubmit={handleLogin} className="login-form">
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="input-field"
              autoComplete="off"
            />
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="form-footer">
            Don’t have an account?{' '}
            <span className="form-link" onClick={() => setPage('signup')}>Sign Up</span>
          </p>
        </div>
      )}

      {page === 'signup' && (
        <div className="login-container">
          <h1 className="app-title">Create an account ✨</h1>
          <form onSubmit={handleSignup} className="login-form">
            <input
              name="newuser"
              type="text"
              placeholder="Choose a username"
              className="input-field"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button type="submit" className="login-button">Sign Up</button>
          </form>
          <p className="form-footer">
            Already have an account?{' '}
            <span className="form-link" onClick={() => setPage('login')}>Login</span>
          </p>
        </div>
      )}

      {page === 'dashboard' && (
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>Welcome, {username} 👋</h2>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>

          <h3>Project Overview</h3>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="add-project-button"
          >
            {showAddForm ? 'Cancel' : '➕ Add New Project'}
          </button>

          {showAddForm && (
            <form onSubmit={handleAddProject} className="add-project-form">
              <input
                type="text"
                placeholder="Task Name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Project"
                value={newProject.project}
                onChange={(e) => setNewProject({ ...newProject, project: e.target.value })}
                required
              />
              <select
                value={newProject.priority}
                onChange={(e) => setNewProject({ ...newProject, priority: e.target.value })}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>Very High</option>
              </select>
              <input
                type="number"
                placeholder="Progress %"
                value={newProject.progress}
                onChange={(e) => setNewProject({ ...newProject, progress: e.target.value })}
                min="0"
                max="100"
                required
              />
              <input
                type="number"
                placeholder="Milestones"
                value={newProject.milestones}
                onChange={(e) => setNewProject({ ...newProject, milestones: e.target.value })}
                min="1"
                required
              />
              <button type="submit">Add Project</button>
            </form>
          )}

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Project</th>
                  <th>Priority</th>
                  <th>Progress</th>
                  <th>Milestones</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.project}</td>
                    <td>
                      <span className={`priority ${item.priority.toLowerCase().replace(' ', '-')}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-percent">{item.progress}%</span>
                    </td>
                    <td>{item.milestones}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Project Completion Chart</h3>
          <div className="bar-chart">
            {chartData.map((item, index) => (
              <div className="bar-row" key={index}>
                <span className="bar-label">{item.project}</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${item.completion}%` }}></div>
                </div>
                <span className="bar-percent">{item.completion}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
