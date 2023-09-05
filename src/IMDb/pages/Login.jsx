
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve email and password from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (formData.email === storedEmail && formData.password === storedPassword) {
      // Email and password match, navigate to the home page
      //   history.push('/home');
      // <Link to '/home' />
      navigate('/home');
    } else {
      // Email and password do not match, display an error message
      setError('Invalid email or password');
    }
  };
  // https://wallpapercave.com/wp/wp2179677.jpg
  return (
    <div style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp2179677.jpg)", width: '100vw', height: '100vh' }}>
      <div style={{border:'1px solid white',display: 'flex', justifyContent: 'center', width: '300px', position: "relative", left: "600px", top: '180px', padding: '20px', flexDirection: 'column', borderRadius: '10px',backdropFilter:'blur(10px)'}}>
        <h2 style={{ color: 'white' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label>Email</label> */}
            <input style={{borderRadius:'6px'}}
              type="email"
              name="email"
              placeholder='email'
              value={formData.email}
              onChange={handleChange}
            />
            <p></p>
          </div>
          <div>
            {/* <label>Password</label> */}
            <input style={{borderRadius:'6px'}}
              type="password"
              name="password"
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
            />
            <p></p>
          </div>
          {error && <p className="error">{error}</p>}
          <button style={{ backgroundColor: '#01090f', color: 'white', borderRadius:'4px'}} type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;


