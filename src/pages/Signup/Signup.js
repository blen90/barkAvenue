import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Signup = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="******" />
        </Col>
      </FormGroup>
	  <FormGroup row>
        <Label for="userName" sm={2}>Username</Label>
        <Col sm={10}>
          <Input type="userName" name="userName" id="userName" placeholder="" />
        </Col>
      </FormGroup>
	  <FormGroup row>
        <Label for="petName" sm={2}>Pet Name</Label>
        <Col sm={10}>
          <Input type="petName" name="petName" id="petName" placeholder="" />
        </Col>
      </FormGroup>
	  <FormGroup row>
        <Label for="petBreed" sm={2}>Pet Breed</Label>
        <Col sm={10}>
          <Input type="petBreed" name="petBreed" id="petBreed" placeholder="" />
        </Col>
      </FormGroup>
      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Gender of pet:</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" />{' '}
              Female
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
	  	<Button className="sub"> Submit </Button>
      </FormGroup>
    </Form>
  );
}

export default Signup;