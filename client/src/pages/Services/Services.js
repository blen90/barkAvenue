import React from "react";
import Props from "../components/Card";
import { Row, Col } from "reactstrap";
import "./Services.css";


const services = [
  {
    name: "Basic Pawsome Stay ",
    image: "assets/images/furry.jpg",
    description: 
    <ul services-list-info-list="true">
        <li>Overnight pawsome stay</li>
        <li>3-Meals-A-Day-Provided! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Basic doggie bath</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Treats included! Bon A-pet-treat!</li>
        <li>
          We will be your puparazzi! Pictures and 1 video sent to you daily
        </li>
      </ul>,
    price: 5,
    id: 1,
  },

  {
    name: "Premium Pawsome Stay ",
    image: "/assets/images/furry2.jpg",
    description: 
     <ul services-list-info-list="true">
        <li>Overnight pawsome stay</li>
        <li>3-Gourmet-Meals! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Doggie bath & nail trim</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>
          We will be your puparazzi! Pictures and unlimited videos sent to you
          daily
        </li>
      </ul>,
    price: 10,
    id: 2,
  },
  {
    name: "Deluxe Pawsome Stay ",
    image: '/assets/images/furry3.jpg',
    description: 
      <ul services-list-info-list="true">
        <li>Overnight pawsome stay</li>
        <li>3-Gourmet-Meals! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Full grooming service</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>
          We will be your puparazzi! Puppy cam available 24/7 through our app!
        </li>
      </ul>,
    price: 15,
    id: 3,
  },
  ];

export default function Display() {
  return (
    <div>
      <Row>
        {services.map((service) => (
          <Col sm="12" md="4">
            <Props
              name={service.name}
              image={service.image}
              description={service.description}
              price={service.price}
              key={service.id}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
