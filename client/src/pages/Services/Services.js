import React, {useState, useEffect} from "react";
import Props from "../components/Card";

import { Row, Col, Button, Input } from "reactstrap";
import { Link, withRouter } from 'react-router-dom';
import "./Services.css";


const services = [
  
  {
    name: "Basic Pawsome Stay ",
    image: "assets/images/furry.jpg",
    description: 
    <ul services-list-info-list="true">
        <li>Overnight pawsome stay</li>
        <li>3-Meals-Provided! Bone Appetit!</li>
        <li>Daily trips to a pawsome park!</li>
        <li>Basic doggie bath</li>
        <li>Oppawtunity to play with same size dogs</li>
        <li>Gourmet treats included! Bon A-pet-treat!</li>
        <li>
        We will be your puparazzi! Pictures and unlimited videos sent to you
          daily
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

function Display(props) {

  const [serviceUpdate, setServiceUpdate] = useState(null);
    const serviceUpdateUpdate = (event) => {
        let serviceName = event.target.value
        if(props.match.path === "/Reservation") {
          if(props.onChangeService) {
            props.onChangeService(serviceName)
          }
        }
        setServiceUpdate(serviceName)
    }

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
            <Input
              onChange={serviceUpdateUpdate}
              checked={serviceUpdate === (service.name)}
              className="form-check-input"
              type="checkbox"
              value={service.name}
            />
          </Col>
        ))}
      </Row>                 
      <h3>{serviceUpdate}</h3>
      {props.match.path === "/Services" ? <Link underline="none" to={"/reservation"}>       
      <Button className="reservation text-center"> Ready? Click here to make a reservation! </Button>
      </Link> : null}
    </div>
  );
}

export default withRouter(Display)