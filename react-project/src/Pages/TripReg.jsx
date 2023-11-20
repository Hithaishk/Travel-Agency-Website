import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function TripReg() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [selectedPackage, setSelectedPackage] = useState("basic");
  const [selectedDate, setSelectedDate] = useState("");
  const [totalPricePerCharge, setTotalPricePerCharge] = useState(0);
  const [tourMessage, setTourMessage] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(0); // Number of people
  const [selectedRegistration, setSelectedRegistration] = useState(null); // Store the selected registration for editing

  const packagePrices = {
    basic: 999,
    standard: 1999,
    premium: 2999,
  };

  const API_URL = "http://localhost:5000/api/trip-registrations";

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    const userEmail = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="))
      ?.split("=")[1];
    console.log(userEmail);

    if (userEmail) {
      try {
        const response = await axios.get(`${API_URL}/registrations`, {
          headers: { "user-email": userEmail },
        });
        setRegistrations(response.data);
        setNumberOfPeople(response.data.length);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    } else {
      // User is not authenticated, display an alert
      alert("Please log in to fetch registrations.");
    }
  };

  const handleAddPerson = async () => {
    const userEmail = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user="))
      ?.split("=")[1];

    if (userEmail) {
      if (name.trim() === "" || age.trim() === "") {
        alert("Name and Age are required.");
      } else {
        const newPerson = {
          selectedDate,
          name,
          age,
          gender,
          selectedPackage,
          user: userEmail,
        };

        try {
          await axios.post(`${API_URL}/register`, newPerson);
          alert("Person added successfully");
          setName("");
          setAge("");
          setGender("male");
          fetchRegistrations();
        } catch (error) {
          console.error("Error adding person:", error);
        }
      }
    } else {
      // User is not authenticated, display an alert
      alert("Please log in .");
    }
  };

  const handleCheckPrice = () => {
    const price = packagePrices[selectedPackage];
    const totalPrice = price * numberOfPeople; // Calculate the total price based on the number of people
    setTotalPricePerCharge(totalPrice);
  };

  const handleEditRegistration = (registration) => {
    setSelectedDate(registration.selectedDate);
    setName(registration.name);
    setAge(registration.age);
    setGender(registration.gender);
    setSelectedPackage(registration.selectedPackage);
    setSelectedRegistration(registration); // Set the selected registration for editing
  };

  const handleUpdateRegistration = async () => {
    if (selectedRegistration) {
      const { _id } = selectedRegistration;
      try {
        // Make a PUT request to update the selected registration
        await axios.put(`${API_URL}/registrations/${_id}`, {
          selectedDate,
          name,
          age,
          gender,
          selectedPackage,
        });
        alert("Registration updated successfully");
        setSelectedRegistration(null); // Clear the selected registration
        fetchRegistrations();
      } catch (error) {
        console.error("Error updating registration:", error);
      }
    }
  };

  const handleDeleteRegistration = async (id) => {
    try {
      await axios.delete(`${API_URL}/registrations/${id}`);
      alert("Registration deleted successfully");
      fetchRegistrations();
    } catch (error) {
      console.error("Error deleting registration:", error);
    }
  };

  const handleFetchData = () => {
    fetchRegistrations();
  };

  useEffect(() => {
    if (selectedPackage === "basic") {
      setTourMessage("Enjoy a budget-friendly trip with our Basic Package.");
    } else if (selectedPackage === "standard") {
      setTourMessage(
        "Upgrade your trip with our premium Package for more amenities."
      );
    } else if (selectedPackage === "premium") {
      setTourMessage(
        "Indulge in luxury with our Ultimate Package for the ultimate experience."
      );
    } else {
      setTourMessage("Select a package to receive tour information.");
    }
  }, [selectedPackage]);

  return (
    <div className="container">
      <h2 className="text-primary fs-1">Registration Form</h2>
      <hr bg-danger />
      <div className="container mt-2 col-lg-4 col-md-6 col-sm-10 border border-4 border-secondary p-4 shadow-lg">
        <div className="form-group">
          <label className="text-primary">Select Trip Date :</label>
          <input
            type="date"
            className="form-control"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-danger">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-warning">Age:</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="text-info">Gender:</label>
          <select
            className="form-control"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose a Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="text-success">Select a Package :</label>
          <select
            className="form-control"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose a Package
            </option>
            <option value="basic">Basic Package</option>
            <option value="standard">Premium Package</option>
            <option value="premium">Ultimate Package</option>
          </select>
        </div>
        <button className="btn btn-success mt-2 w-50" onClick={handleAddPerson}>
          Add Person
        </button>
        <button
          className="btn btn-danger mt-2  w-50"
          onClick={handleCheckPrice}
        >
          Check Price
        </button>
        <button className="btn btn-primary mt-2 w-50" onClick={handleFetchData}>
          Fetch Data
        </button>
        <button
          className="btn btn-warning mt-2 w-50"
          onClick={handleUpdateRegistration}
        >
          Update
        </button>
      </div>
      <div className="mt-3">
        <strong className="text-danger">
          Total Price per Charge: ₹{totalPricePerCharge}
        </strong>
      </div>

      <div className="mt-3">
        <div className="alert alert-info">
          <strong>Tour Message:</strong>
          <p className="text-white bg-primary p-2 rounded text-center fs-3">
            {tourMessage}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <h2 className="text-primary">Trip Registrations</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Package</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((registration) => (
              <tr key={registration._id}>
                <td>{registration.selectedDate}</td>
                <td>{registration.name}</td>
                <td>{registration.age}</td>
                <td>{registration.gender}</td>
                <td>{registration.selectedPackage}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEditRegistration(registration)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteRegistration(registration._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TripReg;
