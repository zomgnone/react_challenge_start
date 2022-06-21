import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      props.addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    if (props.contacts.find(contact => contact.name === name)) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, props.contacts, isDuplicate]);

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? " - Name already exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts} />
      </section>
    </div>
  );
};
