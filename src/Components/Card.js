import React from "react";

const Card = ({ casa }) => {
  return (
    <div className="card m-1">
      <img className="card-img-top" src={casa.photo} alt={casa.country} style={{ height: 200 }}/>
      <div className="card-body">
        <h1 className="fs-6 m-0 card-title">Country</h1>
        <small className="text-muted  card-text">{casa.country}</small>
        <h5 className="card-title mt-1">Description</h5>
        <p className="card-text fs-6">{casa.description}</p>
        <p className="card-text">
          <h6 className="card-title">Address</h6>
          <small className="text-muted">{casa.address}</small>
        </p>
      </div>
    </div>
  );
};

export default Card;
