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

            <h2 className="text-center">About Us</h2>
            <br></br>
            <br></br>
            <img src="/assets/images/furry5.jpg" className="furries col-6" alt="furry" />
            <p className="bio col-6"> Welcome! We are Bark Avenue! We offer you the some pawsome options for your furries staycation while you are away! 
            We offer different packages for your furry friend's comfort and joy!!  Our pets bring so much joy to our lives and the lives of those around us.  They provide companionship, comfort, unwavering loyalty and commitment to their human owners.  It is only fair for us as humans to treat them the same.  At Bark Ave, that is our mission statement.  We are committed to providing all pets with love, comfort, companionship and respect.  Come check us out and find out for yourself why we are the right hotel for your four-legged family members.

          </div>
        </Col>
        <Col md="12" sm="6">
          <div className="container row">
            <h2 className="text-center" >Facilities</h2>
            <p className="bio col-6">
            We offer modern 5 star luxury dog boarding, accommodations and amenities for your most precious companions while you are away on work or play. All of our doggy guest accommodations at Bark Avenue feature our signature modern styling, unexpected interior appointments and a fresh relaxing color palette. Bark Avenue set out from its inception to create the ultimate boarding experience for your loved ones! We are NOT a dog kennel, in fact just the opposite, our goal is to create an environment as close to home as possible. After experiencing the heartbreaking kennel and cage boarding situations in the majority of facilites across the country, we knew we had to create an environment that was luxurious, relaxing, clean, safe and the least stressful experience a dog could ever have while you are out of town.
            </p>
            <img src="/assets/images/furry4.jpg" className="furries col-6" alt="furry" />
          </div>
        </Col>
        <Col md="12" sm="12">
          <div className="container row">

            <h2 className="text-center" >Our Mission</h2>
            <img src="/assets/images/about.jpg" className="furries col-6" alt="furry" />
            <p className="bio col-6"> Does your pooch deserve to be pampered? The SPA provides the most upscale and amazing full Grooming services, Anesthesia Free Teeth Cleaning, Rejuvenating Massages, Vitamin Baths, Pawdicures, Body Wraps, Aromatherapy and Calming Downtempo Music. Your pooch will enjoy the ultimate in 5-Star luxury throughout their very own special SPA day experience!
            Bark Avenue does require paper work for your pets that states that all of your pets vaccinations are up to date and signed by a veterinarian within the last 12 months. Failure to comply with our requirements will conclude in a canceled reservation. Thank you for your understanding.

            </p>
          </div>
        </Col>

      </Row>

    </Container>

  );
}
