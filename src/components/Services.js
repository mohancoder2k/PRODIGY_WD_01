import React from 'react';
import '../App.css'; 

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service">
        <h2>Service 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non libero nulla.</p>
      </div>
      <div className="service">
        <h2>Service 2</h2>
        <p>Aliquam erat volutpat. Phasellus pretium metus in massa tincidunt, id molestie arcu congue.</p>
      </div>
      <div className="service">
        <h2>Service 3</h2>
        <p>Vestibulum nec nunc nec urna finibus vehicula. Cras quis leo sem.</p>
      </div>
    </div>
  );
};

export default Services;
