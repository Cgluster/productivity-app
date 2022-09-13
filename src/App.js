import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [ tasks, setTasks ] = useState(props.tasks);
  const [ filter, setFilter ] = useState('All');

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleCompletedTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTask = tasks.map((task) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTask);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
  <Todo 
  id={task.id} 
  name={task.name} 
  completed={task.completed} 
  key={task.id} 
  toggleCompletedTask={toggleCompletedTask} 
  deleteTask={deleteTask}
  editTask={editTask} />));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} isPressed={name === filter}
    setFilter={setFilter}
    />
  ));

  const taskAmount = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskAmount} remaining`;

  return (
    <div className="todoapp">
      <h1>ToDo App</h1>
        <Form addTask={addTask} />

      <div className="filters btn-group">
        {filterList}
      </div>

      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
      className="todo-list"
      aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
