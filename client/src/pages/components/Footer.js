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

        <Row md="12">
          <Col xs="12" sm="4" className="container text-center">
            <img src="/assets/images/dogicon.png" alt="dog" className="doggie"></img>
            <br></br>
            <h4>
              Bark Avenue
            </h4>
            <h5>
              Luxury Dog Hotel
            </h5>

          </Col>

          <Col xs="12" sm="4" className="container text-center">
            <h6>Call Us: 612-BARK-AVE </h6>
            <h6>Email Us: BarkAvenue@gmail.com</h6>
            <h6>Drop By: 300 N. Bark Ave, Minneapolis, MN, 55418</h6>
            <h6>Drop By: 8001 S. Bark Ave, Austin, TX, 73301</h6>

            <NavItem>
              <NavLink href="https://github.com/blen90/barkAvenue" target="_blank" rel="norefferer">
                <FontAwesomeIcon icon={["fab", "github"]} size="4x" color="white" />
              </NavLink>
            </NavItem>
          </Col>

          <Col className="icons" xs="12" sm="4">
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink href="mailto:">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="tel:651.000.0000">
                  <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://facebook.com">
                  <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" color="white" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="https://instagram.com">
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" color="white" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>

        </Row>
      </Container>
      <p>
        <i>
          Disclaimer:
          <br></br>
          Bark Avenue requires all furry friends to have records proving that vaccines are up to date within the last 12 months, that they have been dewormed in the past 3 months, and that they are healthy.
          <br></br>
          Failure to comply with our requirements will conclude in a canceled reservation. Thank you for your understanding.
        </i>
      </p>
    </div>
  );
}
