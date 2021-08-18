import React from "react";
import { Container, Row, Col, CardImg } from "reactstrap";
//import Profile from "../../../public/images/img1.jpeg";

export default function About() {
  return (
    <Container className="About">
      <Row>
        <Col xs="12" sm="12"> 
        <p> QUALITY PET CARE! AFFORDABLE PRICES!</p>
        </Col>

        <Col xs="12" sm="8">
          <p>About US:</p>
        </Col>

        <Col xs="12" sm="4">
          <CardImg className="petImage" alt="petImage" />
        </Col>
      </Row>
    </Container>
  );
}
