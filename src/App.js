import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import camera from './img/camera.jpg';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  return (
    <section id='login' className='container'>
      <div className='row padding-40-0'>
        <div className='col text-center'>
          <h1>Registration!</h1>
        </div>
      </div>
      <div className='row text-center'>
        <h3 className='w-100'>Click for your shoot</h3>
      </div>

      <div class='row'>
        <div class='col-md-4'>
          <img alt='blue-camera' class='rounded float-left' src={camera} />
        </div>
        <div class='col-md-4 ml-auto'>
          <div className='form'>
            <Form noValidate validated={validated}>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Name</label>
                <Form.Control required type='text' className='form-control' />
              </div>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='Email'>Email</label>
                <Form.Control required type='email' className='form-control' />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email.
                </Form.Control.Feedback>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineRadio1'>
                  Male
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineRadio2'>
                  Female
                </label>
              </div>
              <br /> <br />
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Date of Birth</label>
                <Form.Control required type='text' className='form-control' />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid date.
                </Form.Control.Feedback>
              </div>
              <div className='form-group'>
                <label htmlFor='text'>City</label>
                <Form.Control required type='text' className='form-control' />
              </div>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Country</label>
                <Form.Control required type='text' className='form-control' />
              </div>
              <button className='btn btn-primary' type='submit'>
                Sign In
              </button>
            </Form>
          </div>{' '}
        </div>
      </div>

      {/* <div className="row sign-in"> */}
      {/* <div className="form">
          <Form noValidate validated={validated}>
            <div className="form-group" md="4" controlId="validationCustom01">
              <label htmlFor="text">Name</label>
              <Form.Control required type="text" className="form-control" />
            </div>
            <div className="form-group" md="4" controlId="validationCustom01">
              <label htmlFor="Email">Email</label>
              <Form.Control required type="email" className="form-control" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <br /> <br />
            <div className="form-group" md="4" controlId="validationCustom01">
              <label htmlFor="text">Date of Birth</label>
              <Form.Control required type="text" className="form-control" />
              <Form.Control.Feedback type="invalid">
                Please provide a valid date.
              </Form.Control.Feedback>
            </div>
            <div className="form-group">
              <label htmlFor="text">City</label>
              <Form.Control required type="text" className="form-control" />
            </div>
            <div className="form-group" md="4" controlId="validationCustom01">
              <label htmlFor="text">Country</label>
              <Form.Control required type="text" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </Form>
        </div> */}
      {/* </div> */}

      <div className='row text-center'>
        <div className='col text-center'>
          <span>Forgot your password?</span>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
