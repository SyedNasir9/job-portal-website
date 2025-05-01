import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company.name} - {job.location}</p>
      <p>Type: {job.type} | Salary: {job.salary}</p>
      <Link to={`/jobs/${job.id}`} className="btn-secondary">View Details</Link>
    </div>
  );
};

export default JobCard;
