
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Col, Alert} from 'reactstrap';
import {Link } from "react-router-dom";
import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';
import './Login.css';
import {connect} from 'react-redux';
import { GET_USER } from '../../actions/user.js';

function LoginForm(props) {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      } else {
        alert('Welcome! You have logged in!');
      }

      const { token, user } = await response.json();
      props.dispatch({type:GET_USER,data:user})
      console.log('login user ****',user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <Col sm="12" md="12" className="text-center">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        {/* <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your Login!
        </Alert> */}

        <h3 className='login'>Please login to your account</h3>
        <FormGroup>
          <Input
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            placeholder="email"
            required
          />
          <div className='invalid-feedback'>Email is required!</div>
        </FormGroup>

        <FormGroup>
          <Input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            placeholder="password"
            required
          />
          <div className='invalid-feedback'>Password is required!</div>
        </FormGroup>
        <Button className="sub"> LOGIN </Button>
        <p>Don't have account yet? <Link underline="none" to={"/signup"}> Register Now </Link></p> 
   
      </Form>
    </Col>
  );
}

export default connect() (LoginForm);




