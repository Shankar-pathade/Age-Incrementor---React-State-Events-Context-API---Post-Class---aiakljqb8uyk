import React from "react";

function Child({age, incrementAge}) {
  const handleClick = () => {
    incrementAge();
  }
    return (
      <div id="child">
        <p id="text">Today I am {age} Years of Age</p>
        <button id="button" onClick={handleClick}>Increment Age</button>
      </div>
    );
}

export default Child;
