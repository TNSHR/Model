import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.stopPropagation(); // Prevent overlay click
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal
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
    if (dobDate > today) {
      alert("Invalid date of birth. Please enter a valid date.");
      return;
    }

    // All validations passed
    setIsModalOpen(false);
  };

  return (
    <div className="modal" onClick={handleCloseModal}>
      <button onClick={handleOpenModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal-content" onClick={handleModalClick}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" />
            </div>
            <div>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
