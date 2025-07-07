import React from "react";
import "./Benefits.css";
import { FaClock, FaDollarSign, FaSpa, FaTimesCircle } from "react-icons/fa";

function Benefits() {
  return (
    <section className="benefits-section">
      <p className="benefits-label">Benefits</p>
      <h2 className="benefits-title">Rethink the Way You Stay</h2>

      <div className="benefits-list">
        <div className="benefit-item">
          <FaClock className="benefit-icon" />
          <h3 className="benefit-heading">Flexible check-in</h3>
          <p className="benefit-text">
            Decide on the time of arrival at the hotel.
          </p>
        </div>

        <div className="benefit-item">
          <FaDollarSign className="benefit-icon" />
          <h3 className="benefit-heading">Pay-per-use</h3>
          <p className="benefit-text">Pay only for the time you need.</p>
        </div>

        <div className="benefit-item">
          <FaSpa className="benefit-icon" />
          <h3 className="benefit-heading">Services</h3>
          <p className="benefit-text">
            Enjoy all the services available at the hotel (spa, swimming pool,
            etc.).
          </p>
        </div>

        <div className="benefit-item">
          <FaTimesCircle className="benefit-icon" />
          <h3 className="benefit-heading">Free cancellation</h3>
          <p className="benefit-text">
            Cancel free of charge up to 24 hours before check-in.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
