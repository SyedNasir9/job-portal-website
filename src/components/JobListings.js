import { Link } from 'react-router-dom';
import jobs from '../data/jobsData';
import JobCard from './JobCard'; 

const JobListings = ({ isHome }) => {
  const jobsToShow = isHome ? jobs.slice(0, 3) : jobs; 

  return (
    <section className="job-listings">
      <div className="container">
        <h2 className="section-title">Latest Jobs</h2>
        <div className="jobs-grid">
          {jobsToShow.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {isHome && (
          <div className="view-all-btn">
            <Link to="/jobs" className="btn-primary">View All Jobs</Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
