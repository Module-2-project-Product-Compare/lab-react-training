import React, { useState } from 'react';

function LikeButton() {
  const [like, setLike] = useState(0);

  const handleIncrease = () => {
    setLike(prev => prev + 1);
  };

  return (
    <div>
      <button className='like-button' onClick={handleIncrease}>{like} Like</button>
    </div>
  );
}

export default LikeButton;
