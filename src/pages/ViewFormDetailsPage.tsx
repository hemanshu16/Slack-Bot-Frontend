import React, { useState } from 'react';
import { FormData } from './FillFormPage';
import { getUserDetails } from '../service/MessageService';
import './ViewFormDetailsPage.css';

const ViewFormDetailsPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [userDetails, setUserDetails] = useState<FormData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const response: FormData = await getUserDetails(phoneNumber);
      console.log(response)
      setUserDetails(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setUserDetails(null);
    }
   
  };

  return (
    <div className="page-container">
    <section className="section section-1">
      <h1>Get Details By Phone Page</h1>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </section>
  
    <section className="section section-2">
      {userDetails && (
        <div>
          <h3>User Details</h3>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Address:</strong> {userDetails.address}</p>
          <p><strong>Gender:</strong> {userDetails.gender}</p>
          <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
          <p><strong>Preferences:</strong></p>
          <ul>
            <li>Newsletter: {userDetails.preferences.newsLetter ? 'Yes' : 'No'}</li>
            <li>Updates: {userDetails.preferences.updates ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      )}
    </section>
  </div>
  
  );
};


export default ViewFormDetailsPage;
