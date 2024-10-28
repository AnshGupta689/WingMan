import React, { useState } from 'react';
import './register.css';  
import video from '../../assets/login-video.mp4';  
import logo from '../../assets/leaf-login.jpg';  
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { MdOutlinePassword } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');  
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); 

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const data = { email, username, password, role };
  
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Read response as text
        console.error('Error Response:', errorText); // Log the error response
        throw new Error('Registration failed. Please try again.');
      }
  
      // Registration successful
      if (role === 'farmer') {
        navigate('/farmerdash');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log fetch error
      setErrorMessage(error.message); // Update state with error message
    }
  };
  

  
  return (
    <div className='registerPage1 flex'>
      <div className="container2 flex">

        <div className="videodiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className='title'>Create And Sell Extraordinary Products</h2>
            <p>Be Original Be Real!</p>
          </div>
          <div className="footerDiv flex">
            <span className='text'>Have an account?</span>
            <Link to='/login'>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>
 
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt='Logo' className='large-logo' />
            <h3>Let the journey Begin</h3>
          </div>

          <form className='form grid' onSubmit={handleRegister}>
            {errorMessage && <p className='errorMessage'>{errorMessage}</p>}

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <BiLogoGmail className='icon' />
                <input
                  type='email'
                  id='email'
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type='text'
                  id='username'
                  placeholder='Enter Your Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Role Selection Dropdown */}
            <div className="inputDiv">
              <label htmlFor="role">Register As</label>
              <div className='input flex'>
                <BsFillBuildingFill className='icon' />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="farmer">Farmer</option>
                  <option value="retailer">Retailer</option>
                </select>
              </div>
            </div>

            <button type='submit' className='btn flex personalized-btn'>
              Register
              <RiLoginBoxLine className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot your password? <Link to='/forgot-password'>Click Here</Link>
            </span>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;
