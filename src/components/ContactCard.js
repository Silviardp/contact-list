import React, { useState } from "react";
import "../styles.css";

const ContactCard = () => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: Jenny.Han@notreal.com</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge === true ? <p>Age: 25</p> : null}
      </div>
    </div>
  );
};

export default ContactCard;
