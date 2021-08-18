import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleInputBlur = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required`);
    } else {
      setErrorMessage("");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("I need a real email yo.");
      return;
    } else if (!name.length || !email.length || !message.length) {
      setErrorMessage("Gotta fill out all fields yo.");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8">
          <form className="contactform">
            <p>
              If you would like contact me! Please leave your name, email and
              your message!{" "}
            </p>
            <input
              className="form-control name"
              value={name}
              name="name"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="text"
              placeholder="name"
            />
            <input
              className="form-control email"
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="email"
              placeholder="email"
            />
            <textarea
              className="form-control message"
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="textbox"
              placeholder="your message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}