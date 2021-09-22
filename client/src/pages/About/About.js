import React from "react";
import { Container, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";


export default function About() {
  return (
    <Container className="About">
      <Col lg="12" md="12" sm="12">
        <h2 className="text-center h2">About us</h2>
        <img src="/assets/images/furry5.jpg" className="furries" alt="furry" />
        <p className="bio">
          Welcome! We are Bark Avenue! We are a luxury dog hotel that offers some pawsome packages for your furry friend's staycation while you are away!
          Come check us out and find out for yourself why we are the right hotel for your four-legged family members.
        </p>
        <h2 className="text-center h2" >Facilities</h2>
        <img src="/assets/images/furry4.jpg" className="furries" alt="furry" />
        <p className="bio">
          The accommodations at Bark Avenue feature our signature modern styling, unexpected interior appointments and a fresh relaxing color palette.
          After experiencing the heartbreaking kennel and cage boarding situations in the majority of facilites across the country, we knew we had to create an environment that was luxurious, relaxing, clean, safe and the least stressful experience a dog could ever have while they are away from their home.
        </p>
        <h2 className="text-center h2" >Mission</h2>
        <img src="/assets/images/about.jpg" className="furries" alt="furry" />
        <p className="bio">
          We are committed to providing all pets with love, comfort, companionship and respect.
          Bark Avenue set out from its inception to create the ultimate boarding experience for your loved ones! We are NOT a dog kennel, in fact just the opposite, our goal is to create an environment as close to home as possible.
        </p>
      </Col>
    </Container>
  );
}
