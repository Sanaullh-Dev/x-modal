import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = e.target;

    if (formData.phone.value.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (formData.dob.value > new Date().toISOString().split("T")[0]) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    if (!emailRegx.test(formData.email.value)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    setIsOpen(false);
    console.log(formData);
    setFormData({
      username: formData.username.value,
      email: formData.email.value,
      phone: formData.phone.value,
      dob: formData.dob.value,
    });
  };

  const handleModalClick = (e) => {
    // Close modal when clicking on the modal overlay (outside the content)
    if (e.target.className === "modal") {
      setIsOpen(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100vh",
      }}
    >
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
              <p>Username:</p>
              <input
                required
                className="inputField"
                type="text"
                name="username"
                id="username"
              />
              <p>Email Address:</p>
              <input required type="email" id="email" name="email" />
              <p>Phone Number:</p>
              <input required type="number" id="phone" name="phone" />
              <p>Date of Birth:</p>
              <input required type="date" id="dob" name="dob" />
              <button
                className="submit-button"
                style={{
                  marginTop: "1rem",
                  padding: "10px 50px",
                }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
