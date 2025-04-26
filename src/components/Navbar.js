import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ backgroundColor: '#343a40', padding: '15px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <h1 style={{ color: '#fff', fontSize: '24px' }}>Job Platform</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
        </li>
        <li>
          <Link to="/jobs" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Jobs</Link>
        </li>
        <li>
          <Link to="/companies" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Companies</Link>
        </li>
        <li>
          <Link to="/post-job" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Post Job</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
