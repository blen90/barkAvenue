import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './Signup.css';

const Signup = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    //Set the state to username and password based on the input type,
    if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    } 
  };

  return (
    <Form className="contact">
      <div>
        <h3> Signup below:</h3>

        <FormGroup className="label">
          <Label for="name"> Username: </Label>
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

		<FormGroup>
          <Label for="firstName"> First Name: </Label>
          <Input
            type="text"
            name="firstName"
            placeholder=""
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

		<FormGroup>
          <Label for="lastName"> Last Name: </Label>
          <Input
            type="text"
            name="lastName"
            placeholder=""
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

		<FormGroup>
          <Label for="phoneNumber"> Phone Number: </Label>
          <Input
            type="text"
            name="phoneNumber"
            placeholder=""
            value={phoneNumber}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

		<FormGroup>
          <Label for="petName"> Pet Name: </Label>
          <Input
            type="text"
            name="petName"
            placeholder=""
            value={petName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

		<FormGroup>
          <Label for="petBreed"> Pet Breed: </Label>
          <Input
            type="text"
            name="petBreed"
            placeholder=""
            value={petBreed}
            onChange={handleInputChange}
            required
          />
        </FormGroup>	
      
        <Button className="sub"> Submit </Button>
      </div>
    </Form>
  );
};

export default Signup;