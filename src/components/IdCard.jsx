import React from 'react';

function Idcard(props) {
  const {
    user: { lastName, firstName, gender, height, birth, picture },
  } = props;
  return (
    <div className="card-user">
      <p>
        <span>First name:</span> {firstName}
      </p>
      <p>
        <span>Last name:</span> {lastName}
      </p>
      <p>
        <span>Gender:</span> {gender}
      </p>
      <p>
        <span>Height:</span> {height}
      </p>
      <p>
        <span>Birthday:</span> {birth.toDateString()}
      </p>
      <img src={picture} className="profile" alt="profile" />
    </div>
  );
}

export default Idcard;
