import React from "react";

function FilterButton(props) {
    return (
  <button type="button" className="btn toggle-button" aria-pressed={props.isPressed}
  onClick={() => props.setFilter(props.name)}
  >
    <span>{props.name}</span>
  </button>
    );
}

export default FilterButton;