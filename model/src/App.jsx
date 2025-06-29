import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const preventClose = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    // Validate each field individually
    if (!username) {
      alert("Please fill all the fields.");
      return;
    }
    if (!email) {
      alert("Please fill all the fields.");
      return;
    }
    if (!phone) {
      alert("Please fill all the fields.");
      return;
    }
    if (!dob) {
      alert("Please fill all the fields.");
      return;
    }

    // Email validation
    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // DOB validation
    const dobDate = new Date(dob);
    const today = new Date();
    if (isNaN(dobDate.getTime()) || dobDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // Close modal if all validations pass
    setIsModalOpen(false);
  };

  return (
    <div className="modal" onClick={closeModal}>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal-content" onClick={preventClose}>
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input type="text" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
