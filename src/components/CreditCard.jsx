import React from 'react';

const CreditCard = (props) => {
  const {
    info: {
      type,
      image,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    },
  } = props;
  const styleCreditCard = {
    backgroundColor: bgColor,
    color: color,
    width: '350px',
    height: '175px',
    borderRadius: '15px',
  };
  return (
    <section className="credit" style={styleCreditCard}>
      <div className="bank-logo">
        <img className="img-bank" src={image} alt={type}></img>
      </div>
      <div className="number">
        <p> ···· ···· ···· {number.substr(-4)}</p>
      </div>
      <div className="expires">
        <p>
          <span>Expires </span> {expirationMonth}/{expirationYear}
        </p>
        <p> {bank}</p>
      </div>
      <div className="owner">
        <p>{owner}</p>
      </div>
    </section>
  );
};

export default CreditCard;
