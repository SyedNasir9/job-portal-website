import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../data/jobsData';
import { motion } from 'framer-motion';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((job) => job.id.toString() === id);
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  const handleGoBack = () => {
    navigate('/jobs');
  };

  if (!job) {
    return (
      <div className="container">
        <h2>Job Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Description:</strong> {job.description}</p>

      {!applied ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleApply}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Apply
        </motion.button>
      ) : (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
            style={{
              marginTop: '30px',
              fontSize: '22px',
              color: 'green',
              fontWeight: 'bold',
            }}
          >
            🎉 Applied Successfully!
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoBack}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Go Back to Jobs
          </motion.button>
        </>
      )}
    </div>
  );
};

export default JobDetail;
