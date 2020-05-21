import React from 'react';

const Loader = () => (
  <div className="d-flex justify-content-center mt-5">
    <div className="spinner-border text-primary" style={{ width: '10rem', height: '10rem' }} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>

);

export default Loader;
