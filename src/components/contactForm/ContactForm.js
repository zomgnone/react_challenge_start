import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    // ContactForm
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        placeholder='Contact name'
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='tel'
        value={phone}
        placeholder='Contact phone number'
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type='email'
        value={email}
        placeholder='Contact email address'
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type='submit' value="Add contact"></input>
    </form>
  );
};
