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
          <Col xs="6" sm="4">
            Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
            molestie lorem at massa Facilisis in pretium nisl aliquet Nulla
            volutpat aliquam velit
          </Col>

          <Col xs="6" sm="4">
            Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
            molestie lorem at massa Facilisis in pretium nisl aliquet Nulla
            volutpat aliquam velit
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
        <p> Copyright &copy; Business Name Here</p> 
      </Container>
    </div>
  );
}
