/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      email: '',
      password: '',
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'  
            name='email' 
            type='email' 
            value={email} 
            handleChange={this.handleChange} 
            required 
          />
          <FormInput
            label='Password' 
            name='password' 
            type='password' 
            value={password} 
            handleChange={this.handleChange} 
            required
          />

          <CustomButton type='submit'>
            Sign In
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;