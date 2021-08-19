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
            eleifend quam adipiscing vitae proin sagittis nisl rhoncus
            mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget
            mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque
            egestas congue quisque egestas diam in arcu cursus euismod quis
            viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
            sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et
            egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
            placerat orci nulla pellentesque dignissim enim sit amet venenatis
            urna cursus eget nunc scelerisque viverra mauris in aliquam sem
            fringilla ut morbi tincidunt augue interdum velit euismod
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
