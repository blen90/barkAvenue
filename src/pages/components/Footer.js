import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row col-12>
          <Col xs="6" sm="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Col>

          <Col xs="6" sm="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Col>

          <Col sm="4">Social Media Can go Here</Col>
        </Row>
        <p> Copyright &copy; Business Name Here</p>
      </Container>
    </div>
  );
}
