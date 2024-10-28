import React, { useState } from 'react';
import './login.css'; // Assuming the above CSS is in this file
import video from '../../assets/login-video.mp4'; // Video source
import logo from '../../assets/leaf-login.jpg'; // Logo source
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { FaUserShield } from 'react-icons/fa';
import { MdOutlinePassword } from 'react-icons/md';
import { RiLoginBoxLine } from 'react-icons/ri';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate for redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = { username, password };

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect based on user role
        if (result.role === 'admin') {
          navigate('/admindash'); // Redirect to admin dashboard
        } else if (result.role === 'farmer') {
          navigate('/farmerdash'); // Redirect to farmer dashboard
        } else if (result.role === 'retailer') {
          navigate('/dashboard'); // Redirect to retailer dashboard
        } else {
          setErrorMessage('Unknown role. Please contact support.'); // Handle unknown roles
        }
      } else {
        setErrorMessage('Login failed. Check your username or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.'); // Handle network or server errors
    }
  };

  return (
    <div className='loginPage1 flex'>
      <div className="container1 flex">
        <div className="videodiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Create And Sell Extraordinary Products</h2>
            <p>Be Original Be Real!</p>
          </div>

          <div className="footerDiv flex">
            <span className='text'>Don't have an account?</span>
            <Link to='/register'>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        {/* Login form on the right */}
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt='Logo' className='large-logo' />
            <h3>Welcome Back!</h3>
          </div>

          <form className='form grid' onSubmit={handleLogin}>
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Enter Your Username'
                  value={username} // Control the input value
                  onChange={(e) => setUsername(e.target.value)} // Update state
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdOutlinePassword className='icon' />
                <input
                  type='password'
                  id='password'
                  placeholder='Enter Your Password'
                  value={password} // Control the input value
                  onChange={(e) => setPassword(e.target.value)} // Update state
                  required
                />
              </div>
            </div>

            {/* Personalized login button */}
            <button type='submit' className='btn flex personalized-btn'>
              <RiLoginBoxLine className='icon' />
              Login
            </button>

            <span className='forgotPassword'>
              Forgot your password? <Link to='/forgot-password'><span className='greenText'>Click Here</span></Link>
            </span>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
