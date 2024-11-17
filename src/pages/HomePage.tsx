import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    
    <div className='Box'>
      <h1>Welcome!</h1>
      <div className="card">
        <button onClick={() => navigate('/fill-form')}>
          Fill Form
        </button>
        &nbsp;&nbsp;
        <button onClick={() => navigate('/view-details')}>
          View Filled Form Details
        </button>
      </div>
    </div>
    
  );
};

export default HomePage;
