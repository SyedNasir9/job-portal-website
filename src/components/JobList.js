import { Link } from 'react-router-dom';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.location}</p>
          <Link to={`/jobs/${job.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
