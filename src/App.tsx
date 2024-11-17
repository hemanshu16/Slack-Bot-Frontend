import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FillFormPage from './pages/FillFormPage';
import ViewFormDetailsPage from './pages/ViewFormDetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fill-form" element={<FillFormPage />} />
        <Route path="/view-details" element={<ViewFormDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;