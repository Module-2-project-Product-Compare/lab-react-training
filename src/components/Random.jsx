import React from 'react';

function Random({ min, max }) {
  return (
    <div>
      <span className="card-user">
        {Math.floor(Math.random() * (max - min + 1) + min)}
      </span>
    </div>
  );
}

export default Random;
