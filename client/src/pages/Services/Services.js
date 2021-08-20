import React from "react";
//import Card from "../components/Card";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import "./Services.css";

const services = [
  {
    name: "Basic Pawsome Stay ",
    image: '/assets/images/furry.jpg',
    description: (
      <ul>
        <li>Overnight pawsome stay</li>
        <li>3-Meals-A-Day-Provided! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Basic doggie bath</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Treats included! Bon A-pet-treat!</li>
        <li>
          We will be your puparazzi! Pictures and 1 video sent to you daily
        </li>
      </ul>
    ),
    price: 5,
    id: 1,
  },

  {
    name: "Premium Pawsome Stay ",
    image:"/assets/images/furry2.jpg",
    description: (
      <ul>
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
      </ul>
    ),
    price: 10,
    id: 2,
  },
  {
    name: "Deluxe Pawsome Stay ",
    image: "/assets/images/furry3.jpg",
    description: (
      <ul>
        <li>Overnight pawsome stay</li>
        <li>3-Gourmet-Meals! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Full grooming service</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>
          We will be your puparazzi! Puppy cam available 24/7 through our app!
        </li>
      </ul>
    ),
    price: 15,
    id: 3,
  },
];

// handleSaveClick(from, to) {

//   console.log(from.toLocaleDateString())
//   console.log(to.toLocaleDateString())
//   this.props.reservationInput(from.toLocaleDateString(), to.toLocaleDateString())
  
//   // this.setState(this.state);
// }

export default function Display() {
  return (
    // <div>
    //   {services.map((service) => (
    //     <Link underline='none' to={'/reservation'}>
    //       <Card key={service.id}
    //         //onClick={() => this.onServiceSelect(service)}
    //         name={service.name}
    //         image={service.image}
    //         description={service.description}
    //         price={service.price}

    //       />
    //     </Link>
    //   ))}
    // </div>

    <Row>
      {services.map((service) => (
        
        <Col sm="12" md="4">
        
          <Card key={service.id}>
            <CardTitle tag="h2" margin top="2%">{service.name}</CardTitle>
            <CardImg src={service.image} alt="furry" className="furry"/>
            <CardText>{service.description}</CardText>
            <CardText>Price per night: {service.price} $</CardText>
            <Link underline="none" to={"/reservation"}>
            <Button > Click me to make a reservation</Button> 
            </Link>
          </Card>
        
        </Col>
      ))}
    </Row>
  );
}
