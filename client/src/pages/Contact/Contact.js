import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { Col, Form } from "reactstrap";

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mxb2e23', 'template_twwgk7d', e.target, 'user_j4vKKqMNY4xCOIUz7layV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    alert("Message sent!")
  }

  return (
    <Col sm="12" md="12" className="text-center">
      <h2 className="title"> Howl you doin'?<br></br>
        Leave your information with a message and we will collie you later </h2>
      <Form className="justify-content-center" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <li>
          <input type="text" className="form-name" name="user_name" placeholder="Name" />
        </li>
        <li>
          <input type="text" className="form-email" name="user_email" placeholder="Email" />
        </li>
        <li>
          <input type="text" className="form-message" name="message" placeholder="Message" />
        </li>
        <input className="submit-button" type="submit" value="Send" />
      </Form>
    </Col>
  );

}