import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstname:'',
    username: '',
    email: '',
    password: '',
  });

  // State for table data
  const [tableData, setTableData] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form data if needed

    // Update table data
    setTableData([...tableData, formData]);

    // Reset form fields
    // setFormData({
    //   firstname:'',
    //   username: '',
    //   email: '',
    //   password: '',
    // });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* Render form fields */}
        <label>First Name:
                <input type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}/>
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>

      {/* Render table */}
      <table>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.firstname}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationForm;
