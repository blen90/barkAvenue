import React from 'react';
import emailjs from 'emailjs-com';


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
    <div className="form col-12-lg col-6-md col-3-sm text-center">
      <div className="form-container">
        <h2 className="title"> Howl you doin'? Leave your information with a message and we will collie you later </h2>
        <br></br>
        <form className="contact-form col-8 pt-2 mx-auto" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <li>
            <input type="text" className="form-name" name="user_name" placeholder="Name" />
          </li>
          <li>
            <input type="text" className="form-email" name="user_email" placeholder="Email" />
          </li>
          <li>
            <textarea type="text" className="form-message" name="message" placeholder="Message" />
          </li>
          <input className="submit-button btn-primary" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}