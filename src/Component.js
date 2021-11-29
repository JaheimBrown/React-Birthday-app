import React, { useState } from "react";

const Component = ({ birthdays, handleClick }) => {
  return (
    <>
      {/* pass lenght prop to appjs */}
      {birthdays.map(({ name, img, age, id }) => (
        <div className='flex-container' key={id}>
          <div>
            <img src={img} alt='profile image' className='img' />
          </div>
          <div>
            <h2>{name}</h2> <p>{age}</p>
          </div>
        </div>
      ))}
      <button className='btn' onClick={handleClick}>
        Clear Birthdays
      </button>
    </>
  );
};

export default Component;
