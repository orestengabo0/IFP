import React, { useState } from "react";
import "./ContactForm.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import contactImage from "../../assets/contactImage.png";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Header />
      <h2 className="contact-header">Contact us</h2>
      <hr />
      <img
        src={contactImage}
        alt="Contact illustraction"
        className="contact-form-image"
      />
      <p className="talk">Eagerly want to talk with us</p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-form-submit d-flex justify-content-center">
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
