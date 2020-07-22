import React, { useState } from 'react';
import './App.css';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import camera from './img/camera.jpg';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [name, setName] = useState('Full Name');
  const [email, setEmail] = useState('Email');
  const [date, setDate] = useState('May, 25, 1977');
  const [city, setCity] = useState('City');
  const [country, setCountry] = useState('Country');
  const [thing, setThing] = useState('');
  const [subscription, setSubscription] = useState('');

  const refreshPage = () => window.location.reload(true);

  function handleName(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }
  function handleDate(e) {
    setDate(e.target.value);
    console.log(date);
  }
  function handleCity(e) {
    setCity(e.target.value);
    console.log(city);
  }
  function handleCountry(e) {
    setCountry(e.target.value);
    console.log(country);
  }
  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

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
        <div class='col-md-4 ml-auto'>
          <img
            alt='blue-camera'
            className='rounded mb-0'
            height='638px'
            width='450px'
            src={camera}
          />{' '}
        </div>
        <div class='col-md-6 ml-auto'>
          <div className='form'>
            <Form noValidate validated={validated}>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Name</label>
                <Form.Control
                  required
                  type='text'
                  className='form-control'
                  variant='filled'
                  onChange={handleName}
                />
              </div>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='Email'>Email</label>
                <Form.Control
                  required
                  type='email'
                  className='form-control'
                  variant='filled'
                  onChange={handleEmail}
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid email.
                </Form.Control.Feedback>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  type='radio'
                  value='a'
                  name='radio-button-demo'
                  onClick={() => setThing('Male')}
                />
                <label class='form-check-label' for='inlineRadio1'>
                  Male
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  type='radio'
                  value='b'
                  name='radio-button-demo'
                  onClick={() => setThing('Female')}
                />
                <label class='form-check-label' for='inlineRadio2'>
                  Female
                </label>
              </div>
              <br /> <br />
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Date of Birth</label>
                <Form.Control
                  required
                  type='text'
                  className='form-control'
                  variant='filled'
                  onChange={handleDate}
                />
                <Form.Control.Feedback type='invalid'>
                  Please provide a valid date.
                </Form.Control.Feedback>
              </div>
              <div className='form-group'>
                <label htmlFor='text'>City</label>
                <Form.Control
                  required
                  type='text'
                  className='form-control'
                  variant='filled'
                  onChange={handleCity}
                />
              </div>
              <div className='form-group' md='4' controlId='validationCustom01'>
                <label htmlFor='text'>Country</label>
                <Form.Control
                  required
                  type='text'
                  className='form-control'
                  variant='filled'
                  onChange={handleCountry}
                />
              </div>
              Subscription {'    '}
              <button
                type='button'
                className='btn btn-light'
                onClick={() => setSubscription('Bronze')}
              >
                Bronze
              </button>{' '}
              <button
                type='button'
                className='btn btn-outline-secondary'
                onClick={() => setSubscription('Silver')}
              >
                Silver
              </button>{' '}
              <button
                type='button'
                className='btn btn-outline-warning'
                onClick={() => setSubscription('Gold')}
              >
                Gold
              </button>
              <br /> <br />
              <Button
                className='btn-btn primary'
                onClick={() =>
                  window.alert(`
                    Name: ${name}
                    Email: ${email}
                    Gender: ${thing}
                    Date: ${date}
                    City: ${city}
                    Country: ${country}
                    Subscription: ${subscription}
                    `)
                }
              >
                Sign In
              </Button>{' '}
              <Button className='btn btn-danger' onClick={refreshPage}>
                Cancel
              </Button>
            </Form>
          </div>{' '}
        </div>
      </div>

      <div className='row text-center'>
        <div className='col text-center'>
          <span>Forgot your password? DAmn ;/</span>
        </div>
      </div>
    </section>
  );
};
export default LoginPage;
