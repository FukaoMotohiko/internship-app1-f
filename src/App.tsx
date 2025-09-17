import React from 'react';
import CreateForm from './components/CreateForm';
import './index.css'; 
import AdjustmentHeader from './components/AdjustmentHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="/adjustmentHeader" element={<AdjustmentHeader />} />
      </Routes>
    </Router>
  );
};

export default App
