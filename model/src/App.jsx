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

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value;

    if (!username || !email || !phone || !dob) {
      alert("Please fill all the fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const dobDate = new Date(dob);
    const today = new Date();
    if (isNaN(dobDate.getTime()) || dobDate > today) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    setIsModalOpen(false);
  };

  return (
    <div
      className="modal"
      onClick={(e) => {
        if (e.target.className === "modal") {
          closeModal();
        }
      }}
    >
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
