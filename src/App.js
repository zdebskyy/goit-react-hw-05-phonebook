import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    this.setState((prevState) => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== contactId
        ),
      };
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <Layout>
        <AppHeader />
        <ContactForm onAddContact={this.addContact} />
        <ContactList contacts={contacts} onRemoveContact={this.removeContact} />
      </Layout>
    );
  }
}
