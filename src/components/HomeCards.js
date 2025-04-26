import { Link } from 'react-router-dom';

const HomeCards = () => (
  <div className="home-cards">
    <div className="card">
      <h3>Search Jobs</h3>
      <Link to="/jobs">
        <button>Search Jobs</button>
      </Link>
    </div>
    <div className="card">
      <h3>View Companies</h3>
      <Link to="/companies">
        <button>View Companies</button>
      </Link>
    </div>
    <div className="card">
      <h3>Post Job</h3>
      <Link to="/post-job">
        <button>Post Job</button>
      </Link>
    </div>
  </div>
);

export default HomeCards;
