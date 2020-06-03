import React, { useState } from "react";
import ContactCard from "./components/ContactCard";

const App = () => {
  const [contacts, setContacts] = useState([]);

  fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setContacts(data.results);
    });

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
