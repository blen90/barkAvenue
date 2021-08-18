import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Login.css';

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    //Set the state to username and password based on the input type,
    if (inputType === "userName") {
      setUserName(inputValue);
    } else (inputType === "password") {
      setPassword(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(userName) ||!validateEmail(userName))  {
      setErrorMessage(" Wrong User Name or Password");
      return;
    }
    setUserName("");
    setPassword("");
  };

  return (
    <Form className="contact">
      <div>
        <h3> Login to your account:</h3>

        <FormGroup className="label">
          <Label for="name"> User Name: </Label>
          <Input
            type="text"
            placeholder=" "
            value={userName}
            onChange={handleInputChange}
            name="userName"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="password"> Password: </Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
      
        <Button className="sub"> Submit </Button>
        <p>I don't have account yet. <a href=""> Register Now </a></p> 
      </div>
    </Form>
  );
};

export default Login;


