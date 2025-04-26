import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobList from './components/JobList';
import JobDetail from './components/JobDetail';
import SearchBar from './components/SearchBar';
import jobsData from './data/jobsData';
import CompaniesList from './components/CompaniesList';
import PostJob from './components/PostJob';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [jobs, setJobs] = useState(jobsData);

  // Search functionality
  const searchJobs = (keyword) => {
    const results = jobsData.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword.toLowerCase()) ||
        job.location.toLowerCase().includes(keyword.toLowerCase())
    );
    setJobs(results);
  };

  // Function to add a new job
  const addJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob]);
    toast.success('Job posted successfully!');
  };

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <HomeCards />
            </>
          }
        />

        {/* Jobs listing route */}
        <Route
          path="/jobs"
          element={
            <>
              <SearchBar onSearch={searchJobs} />
              <JobList jobs={jobs} />
            </>
          }
        />

        {/* Job detail route */}
        <Route path="/jobs/:id" element={<JobDetail />} />

        {/* View Companies route */}
        <Route path="/companies" element={<CompaniesList />} />

        {/* Post Job route */}
        <Route path="/post-job" element={<PostJob addJob={addJob} />} />
      </Routes>
    </Router>
  );
}

export default App;

