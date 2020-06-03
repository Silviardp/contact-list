import React, { useState, useEffect } from "react";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      });
  }, []);

  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </div>
  );
};

export default App;
