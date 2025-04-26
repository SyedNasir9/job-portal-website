import React from 'react';

const companiesData = [
  { name: 'TechCorp', description: 'A leading technology company' },
  { name: 'WebWorks', description: 'A web development company' },
  { name: 'FinSolve', description: 'Financial software solutions' },
  { name: 'InnovateX', description: 'Innovation at the heart of everything' },
];

const CompaniesList = () => (
  <div className="container">
    <h2>List of Companies</h2>
    <div className="job-list">
      {companiesData.map((company, index) => (
        <div key={index} className="job-card">
          <h3>{company.name}</h3>
          <p>{company.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CompaniesList;
