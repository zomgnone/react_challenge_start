import React from "react";

export const ContactPicker = (props) => {
  return (
    // ContactPicker
    <select onChange={props.onChange}>
      <option value={""} key={-1}>
        No contact selected
      </option>
      {props.contacts.map((contact, index) => {
        return (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        );
      })}
    </select>
  );
};
