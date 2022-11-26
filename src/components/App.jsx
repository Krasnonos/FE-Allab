import { Routes, Route, Navigate } from 'react-router-dom';
import { JobsList, JobDetails } from '../pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/jobs" element={<JobsList />} />
      <Route path="/jobs/:jobId" element={<JobDetails />} />
      <Route path="*" element={<Navigate to="/jobs" />}></Route>
    </Routes>
  );
};
