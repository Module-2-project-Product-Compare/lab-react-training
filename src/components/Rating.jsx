import { useState } from 'react';

function Rating({ children }) {
  const [rating, setRating] = useState(Math.round(children));

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;

        if (value <= rating) {
          return (
            <span
              className="star-rating"
              key={value}
              onClick={() => handleClick(value)}
            >
              ★
            </span>
          );
        }

        return (
          <span
            className="star-rating"
            key={value}
            onClick={() => handleClick(value)}
          >
            ☆
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
