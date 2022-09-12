function App(props) {
  return (
    <div className="todoapp">
      <h1>ToDo App</h1>
      <form>
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
        />
        <button type="submit" className="btn btn-primary btn-lg">
          Add
        </button>
      </form>

      <div className="filters btn-group">
        <button type="button" className="btn toggle-button" aria-pressed="true">
          <span>All</span>
        </button>
        <button type="button" className="btn toggle-button" aria-pressed="false">
          <span>Active</span>
        </button>
        <button type="button" className="btn toggle-button" aria-pressed="false">
          <span>Complete</span>
        </button>
      </div>

      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
      className="todo-list"
      aria-labelledby="list-heading"
      >
        <li className="todo-small-list">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-1">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn-delete">
              Delete
            </button>
          </div>
        </li>
        <li className="todo-small-list">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-2">
              Sleep
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn-delete">
              Delete
            </button>
          </div>
        </li>
        <li className="todo-small-list">
          <div className="c-cb">
            <input id="todo-3" type="checkbox" defaultChecked={false} />
            <label className="todo-label" htmlFor="todo-3">
              Read
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn-delete">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
