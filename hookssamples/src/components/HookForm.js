import React, { useState } from 'react';

const HookForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    phoneNumber: '',
    email: '',
    startDate: '',
    endDate: '',
    streetAddress: '',
    streetAddressLine2: '',
    city: '',
    stateProvince: '',
    zipCode: '',
    file: null,
   });

  const handleChange = (e) => {
    const { name, value,type } = e.target;
    // setFormData({ ...formData, [name]: value });

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'file' ? e.target.files[0] : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New User Registration</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      /><br/><br/>

      
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />

      
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      /><br/><br/>

      
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      /><br/><br/>

        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        /><br/><br/>
     
      <label htmlFor="streetAddress">Street Address</label>
      <input
        type="text"
        id="streetAddress"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        required
      />

      <label htmlFor="streetAddressLine2">Street Address Line 2</label>
      <input
        type="text"
        id="streetAddressLine2"
        name="streetAddressLine2"
        value={formData.streetAddressLine2}
        onChange={handleChange}
      /><br/><br/>

      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label htmlFor="stateProvince">State / Province</label>
      <input
        type="text"
        id="stateProvince"
        name="stateProvince"
        value={formData.stateProvince}
        onChange={handleChange}
      /><br/><br/>

      <label htmlFor="zipCode">Postal / Zip Code</label>
      <input
        type="text"
        id="zipCode"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
      /><br/><br/>

        <label>
        File:
        <input type="file" name="file" onChange={handleChange} />
      </label>
      <br/><br/>

    <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
