import React from 'react';
import Rating from './Rating';

function DriverCard(props) {
  const {
    info: {
      name,
      rating,
      img,
      car: { model, licensePlate },
    },
  } = props;
  return (
    <div className="driver-card">
      <div className="card-img">
        <img src={img} alt="driver" />
      </div>
      <div className="name-driver">
        <p>{name}</p>
        <Rating className="star">{rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
