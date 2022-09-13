import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-1", name: "Eat", completed: true},
  { id: "todo-2", name: "Sleep", completed: false},
  { id: "todo-3", name: "Exercise", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);