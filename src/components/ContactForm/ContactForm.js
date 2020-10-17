import React, { Component } from "react";
import "./ContactForm.css";
import InputForm from "../InputForm/InputForm";
export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.setState({ name: "", number: "" });
  };

  handleInput = (value) => {
    this.setState({ name: value });
  };
  handleNumber = (value) => {
    this.setState({ number: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <InputForm
          label="Name"
          type="text"
          value={name}
          placeholder="Enter your name"
          onInput={this.handleInput}
        />
        <InputForm
          label="Number"
          type="number"
          value={number}
          placeholder="Enter your number"
          onInput={this.handleNumber}
        />
        <button type="submit" className="buttonSubmit">
          Add contact
        </button>
      </form>
    );
  }
}
