import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const style = { backgroundColor, width: '300px', height: '100px' };

  return <div style={style}>

        </div>;
};

export default BoxColor;