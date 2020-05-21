import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => (
  <div className="card">
    <div className="card-body">
      <img src="" alt="" className="card-img-top" />
      <h5 className="card-title">React JS</h5>
      <Link to="/profile/" className="btn btn-primary">
        Open
      </Link>
    </div>
  </div>
);

export default Card;
