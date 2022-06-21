import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    // AppointmentForm
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='date'
        value={date}
        min={getTodayString()}
        required
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type='time'
        value={time}
        required
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)} 
      />
      <input
        type='submit'
        value='Add appointment'
      />
    </form>
  );
};
