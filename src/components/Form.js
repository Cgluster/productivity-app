import React, { useState } from "react";

function Form(props) {
    const [ name, setName ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') {
            return alert('Please enter a task.');
        }
        props.addTask(name);
        setName('');
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
  <form onSubmit={handleSubmit}>
    <h2 className="label-wrapper">
      <label htmlFor="todo-input" className="label-lg">
        What do you need to do today?
      </label>
    </h2>
    <input
    type="text"
    id="todo-input"
    className="input input-lg"
    name="text"
    autoComplete="off"
    value={name}
    onChange={handleChange}
    />
    <button type="submit" className="btn btn-primary btn-lg">
      Add
    </button>
  </form>
    );
}

export default Form;