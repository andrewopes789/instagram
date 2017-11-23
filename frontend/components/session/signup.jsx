import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  renderErrors () {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.receiveErrors([]);
  }

  render () {
    return(
      <div className='session-form'>

        <form onSubmit={this.handleSubmit}>
          <h2>Carstagram</h2>
          <p className='session-blurb'>Sign up to see photos and videos of cars</p>
          {this.renderErrors()}
          <label>
            <input
              type='text'
              onChange={this.handleInput('email')}
              placeholder='Email'
              className='session-input'
            />
          </label>
          <br/>
          <br/>
          <label>
            <input
              type='text'
              onChange={this.handleInput('username')}
              placeholder='Username'
              className='session-input'
            />
          </label>
          <br/>
          <br/>
          <label>
            <input
              type='password'
              onChange={this.handleInput('password')}
              placeholder='Password'
              className='session-input'
            />
          </label>
          <br/>
          <br/>
          <button type="submit" className="session-button">Sign Up</button>
          <br/>
          <br/>
          <label>Have an account? &nbsp;
            <Link to="/login">Login</Link>
          </label>

        </form>
      </div>
    );
  }
}

export default Signup;
