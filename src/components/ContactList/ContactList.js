import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ContactList.css";
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <TransitionGroup component="ul" className="contactsList">
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames="contactIn">
          <li className="contactItem">
            <span className="contactText">
              {contact.name} : {contact.number}
            </span>
            <button
              type="button"
              className="removeBtn"
              onClick={() => onRemoveContact(contact.id)}
            >
              X
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
