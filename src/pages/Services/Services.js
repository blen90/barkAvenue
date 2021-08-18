import React from 'react';
import Card from '..components/Card';

const Services = [
  {
    name: 'Basic Pawsome Stay ',
    image: <img src="/assets/images/furry.jpg" alt="landing page" className="landing_page"></img>,
    description: 
    <ul> 
        <li>Overnight Stay</li>
		<li>3-Meals-A-Day-Provided</li>
		<li>1 Hour walk</li>
		<li>Basic doggie bath</li>
		<li>Group play time with same size dogs</li>
		<li>Treats included,</li>
    </ul>,
    id: 1,
  },
  
];

export default function Display() {
  return (
    <div>
      {services.map((service) => (
        <Card name={service.name} description={service.description} key={service.id} />
      ))}
    </div>
  );
}