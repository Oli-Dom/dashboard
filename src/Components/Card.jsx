import React from 'react';

const Card = ({ message, number }) => {
  return (
    <div className="card">
      <h3>
        {message}
        {number}
      </h3>
    </div>
  );
};

export default Card;
