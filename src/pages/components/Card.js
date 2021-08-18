import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };


  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}