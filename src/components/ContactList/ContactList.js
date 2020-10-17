import React from "react";
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>
            {contact.name} : {contact.number}
          </span>
          <button type="button" onClick={() => onRemoveContact(contact.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
