import React, { useState } from 'react';
import './FillFormpage.css'; // Custom CSS for styling
import {sendMessage} from '../service/MessageService';

// Define the type for form data
export interface FormData {
  name: string;
  phoneNumber: string;
  gender: string;
  preferences: {
    newsLetter: boolean;
    updates: boolean;
  };
  address: string;
}

// Removed invalid export statement

const FillFormPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phoneNumber: '',
    gender: 'male',
    preferences: {
      newsLetter: false,
      updates: false,
    },
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        preferences: {
          ...prevData.preferences,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      gender: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let message:string = await sendMessage(formData);
    alert(message);
  };

  return (
    <div className='FormBox'>
    <div className="App">
      <h2>User Details</h2>
    
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleRadioChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleRadioChange}
              />
              Female
            </label>
          </div>
        </div>
        
        <div className="form-group">
          <label>Preferences:</label>
          <label>
            <input
              type="checkbox"
              name="newsLetter"
              checked={formData.preferences.newsLetter}
              onChange={handleChange}
            />
            Receive Newsletter
          </label>
          <label>
            <input
              type="checkbox"
              name="updates"
              checked={formData.preferences.updates}
              onChange={handleChange}
            />
            Receive Updates
          </label>
        </div>
        
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>

  );
};

export default FillFormPage;
