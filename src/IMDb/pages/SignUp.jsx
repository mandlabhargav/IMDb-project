import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Validation logic
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length === 0) {
      // Save email and password to local storage
      localStorage.setItem('email', formData.email);
      localStorage.setItem('password', formData.password);
      localStorage.setItem('name', formData.name);

      navigate('/login');


    } else {
      setErrors(errors);
    }
  };

  return (
    <div style={{ backgroundImage: "url(https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg)", width: "100vw", height: "100vh" }}>
      <div style={{ border: '1px solid white', display: 'flex', justifyContent: 'center', width: '300px', position: "relative", left: "600px", top: '150px', padding: '20px', flexDirection: 'column', borderRadius: '10px',backdropFilter:'blur(5px)' }} >
        <h2 style={{ color: 'white' }}>Signup</h2>
        <form onSubmit={handleSubmit}>

          {/* <label>Name</label> */}
          <input style={{borderRadius:'6px'}}
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
          />
          <p></p>
          {errors.name && <p className="error">{errors.name}</p>}
          {/* </div> */}
          {/* <div> */}
          {/* <label>Email</label> */}
          <input style={{borderRadius:'6px'}}
            type="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
          />
          <p></p>
          {errors.email && <p className="error">{errors.email}</p>}
          {/* </div> */}
          {/* <div> */}
          {/* <label>Password</label> */}
          <input style={{borderRadius:'6px'}}
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
          />
          <p></p>
          {errors.password && <p className="error">{errors.password}</p>}
          {/* </div> */}
          {/* <div> */}
          {/* <label>Confirm Password</label> */}
          <input style={{borderRadius:'6px'}}
            type="password"
            name="confirmPassword"
            placeholder='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p></p>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button style={{ backgroundColor: '#01090f', color: 'white',borderRadius:'4px' }} type="submit">Signup</button>

        </form>
      </div>
    </div>
  );
}

export default SignupForm;






