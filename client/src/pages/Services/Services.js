import React from 'react';
import Card from '../components/Card';
import './Services.css'

const services = [

  {
    name: 'Basic Pawsome Stay ',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/furry.jpg'} alt="furry" className="furry"></img>,
    description:
      <ul>
        <li>Overnight pawsome stay</li>
        <li>3-Meals-A-Day-Provided! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Basic doggie bath</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Treats included! Bon A-pet-treat!</li>
        <li>We will be your puparazzi! Pictures and 1 video sent to you daily</li>
      </ul>,
    price: 5,
    id: 1,
  },

  {
    name: 'Premium Pawsome Stay ',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/furry2.jpg'} alt="furry" className="furry"></img>,
    description:
      <ul>
        <li>Overnight pawsome stay</li>
        <li>3-Gourmet-Meals! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Doggie bath & nail trim</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>We will be your puparazzi! Pictures and unlimited videos sent to you daily</li>
      </ul>,
    price: 10,
    id: 2,
  },
  {
    name: 'Deluxe Pawsome Stay ',
    image: <img src={process.env.PUBLIC_URL + '/assets/images/furry3.jpg'} alt="furry" className="furry"></img>,
    description:
      <ul>
        <li>Overnight pawsome stay</li>
        <li>3-Gourmet-Meals! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Full grooming service</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>We will be your puparazzi! Puppy cam available 24/7 through our app!</li>
      </ul>,
    price: 15,
    id: 3,
  },

];

export default function Display() {
  return (
    <div>
      {services.map((service) => (
        <Card name={service.name} image={service.image} description={service.description} price={service.price} key={service.id} />
      ))}
    </div>
  );
}