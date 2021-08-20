
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
// import { validateEmail } from '../../utils/helpers';
import {Link } from "react-router-dom";

import './Login.css';

import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';

function LoginForm() {
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
      }

      const { token, user } = await response.json();
      console.log(user);
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
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <div className='invalid-feedback'>Email is required!</div>
        </FormGroup>

        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <div className='invalid-feedback'>Password is required!</div>
        </FormGroup>

      
        <Button className="sub"> Submit </Button>
        <p>I don't have account yet. <Link underline="none" to={"/signup"}> Register Now </Link></p> 
   
    </Form>
    </>

  );
}

// export default Login;

//         <Button
//           disabled={!(userFormData.email && userFormData.password)}
//           type='submit'
//           variant='success'>
//           Submit
//         </Button>
//     </>
//   );
// };

export default LoginForm;

