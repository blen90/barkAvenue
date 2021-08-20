import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
// import AboutImg from './AboutImg.png';

export default function About() {
  return (
    <Container className="About">
      <Row>
      <Col md="12" sm="6">
          <div className="container row">
            <h2>About Us</h2>
            <br></br>
            <br></br>
            <img src="/assets/images/furry5.jpg" className="furries col-8" alt="furry" />
            <p className="bio col-4"> Welcome! We are tbd! We offer you the some pawsome options for your furries staycation while you are away! <br></br>
            We offer different packages for your furryfriend's comfort and joy!!  Our pets bring so much joy to our lives and the lives of those around us.  They provide companionship, comfort, unwavering loyalty and commitment to their human owners.  It is only fair for us as humans to treat them the same.  At City Paws Pet Club, that is our mission statement.  We are committed to providing all pets with love, comfort, companionship and respect.  Come check us out and find out for yourself why we are the right hotel for your four-legged 
            </p>
          </div>
        </Col>
        <br></br>
        <br></br>
        
        <br></br>
        
        <Col md="12" sm="6">
          <div className="container row">
            <h2>Facilities</h2>
            <br></br>
            <br></br>
            <p className="bio col-4">
             Our facilites are top notch for the comfort of your furryfriend and each furry gets their own space to sleep and they also have the option to play with other furries during their stay. 
            <br></br>
            <br></br>
            We offer top quality food and treats to your furry and we have a big lot that is divided in areas where your dog can have a pawntastic time playing with other pets. 
            </p>
            <img src="/assets/images/furry4.jpg" className="furries col-8" alt="furry" />
          </div>
        </Col>
        <Col md="12" sm="12">
          <div className="container row">
            <h2>Our Mission</h2>
            <img src="/assets/images/about.jpg" className="furries col-8" alt="furry" />
            <p className="bio col-4"> Bring your furries over so they are pampered while you're being pampered yourself!
            </p>
          </div>
        </Col>

      </Row>

    </Container>

  );
}
