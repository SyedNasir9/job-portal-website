import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostJob = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !type || !location || !salary || !description) {
      alert('Please fill all fields');
      return;
    }

    const newJob = {
      id: Date.now(), 
      title,
      type,
      location,
      salary,
      description,
    };

    addJob(newJob);

    // Clear the form
    setTitle('');
    setType('');
    setLocation('');
    setSalary('');
    setDescription('');

    // Redirect to jobs page
    navigate('/jobs');
  };

  return (
    <div className="container" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Job Type (e.g., Full-Time, Part-Time)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button type="submit" style={buttonStyle}>Post Job</button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '12px',
  fontSize: '18px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default PostJob;
