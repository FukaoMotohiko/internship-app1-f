import React from 'react';
import CreateForm from './pages/CreateForm';
import './index.css'; 
import AdjustmentPage from './pages/AdjustmentPage';
import AttendanceInput from './pages/AttendanceInput';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/adjustment/:id" element={<AdjustmentPage />} />
        <Route path="/attendance/:id" element={<AttendanceInput />} />
      </Routes>
    </Router>
  );
};

export default App
