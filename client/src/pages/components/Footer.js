import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab);

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row col-12>
          <Col xs="6" sm="4" className="container text-center">
            <img src="/assets/images/dogicon.png"  alt="dog"></img>
            <br></br>
            <h4>
              Bark Avenue
            </h4>
            <h5>
              Luxury Dog Hotel
            </h5>
          </Col>

          <Col xs="6" sm="4" className="container text-center"> 
            <h6>Call Us: 612-BARK-AVE </h6>
            <h6>Email Us: BarkAvenue@gmail.com</h6>
            <h6>Drop By: 300 N. Bark Ave, Minneapolis, MN, 55418</h6>
            <h6>Drop By: 8001 S. Bark Ave, Austin, TX, 73301</h6>
            <a href="https://github.com/blen90/barkAvenue"><img src="/assets/images/github.png"></img></a>
          </Col>

          <Col xs="12" sm="4">
            <Nav className="justify-content-end">
              <NavItem>
                <NavLink href="mailto:">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="tel:651.000.0000">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://facebook.com">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://instagram.com">
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
