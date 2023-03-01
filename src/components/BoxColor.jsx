import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const style = {
    backgroundColor,
    width: '300px',
    height: '100px',
    padding: '40px',
    fontWeight: 'bold',
  };

  return (
    <div style={style}>
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
};

export default BoxColor;
