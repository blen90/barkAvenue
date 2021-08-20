import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import AboutImg from './AboutImg.png';

export default function About() {
  return (
    <div>
      <Container className="About">
        <Row>
          <Col sm="6">
            <h4>About US:</h4> 
            Our pets bring so much joy to our lives and the lives of those around us.  They provide companionship, comfort, unwavering loyalty and commitment to their human owners.  It is only fair for us as humans to treat them the same.  At City Paws Pet Club, that is our mission statement.  We are committed to providing all pets with love, comfort, companionship and respect.  Come check us out and find out for yourself why we are the right hotel for your four-legged 
          </Col>

          <Col sm="6">
            <CardImg
              src={AboutImg} 
              className="petImage"
              alt="petImage"
            />
          </Col>
         
        </Row>

      </Container>
    </div>
  );
}
