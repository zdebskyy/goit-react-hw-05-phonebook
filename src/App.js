import React, { Component } from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  onChangeFilter = (filter) => {
    this.setState({ filter });
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
  getfilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  componentDidMount() {
    const localStItems = localStorage.getItem("contacts");
    if (localStItems) {
      this.setState({ contacts: JSON.parse(localStItems) });
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getfilteredContacts();
    return (
      <Layout>
        <AppHeader />
        <ContactForm onAddContact={this.addContact} allContacts={contacts} />
        {contacts.length > 1 && (
          <Filter value={filter} onFilter={this.onChangeFilter} />
        )}
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        />
      </Layout>
    );
  }
}
