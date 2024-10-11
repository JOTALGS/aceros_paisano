import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
      .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            email: "",
            name: "",
            message: "",
            loading: false,
            alertmessage: "SUCCESS! Thank you for your message",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormData({
            ...formData,
            loading: false,
            alertmessage: `Failed to send! ${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HelmetProvider>
      <section id="contact" className="contact">
        <div className="container_contact">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="px-24">
            <h1 className="display-4 mb-4">Contact me</h1>
            <hr className="t_border my-4 ml-0 mr-60 text-left" />
          </div>
          <div className="contact_sec">
            <div className="alert-container">
              {formData.show && (
                <div
                  className={`alert alert-${formData.variant} rounded-0 co_alert`}
                  role="alert"
                >
                  <p className="my-0">{formData.alertmessage}</p>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setFormData({ ...formData, show: false })}
                  >
                    <span>&times;</span>
                  </button>
                </div>
              )}
            </div>
            <div className="contact-details">
              <h3 className="color_sec py-4">Get in touch</h3>
              <address>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <br />
                <br />
                {contactConfig.hasOwnProperty("YOUR_FONE") && (
                  <p>
                    <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                  </p>
                )}
              </address>
              {/* <p>{contactConfig.description}</p> */}
            </div>
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="contact__form w-100">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      type="text"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <button className="btn ac_btn" type="submit">
                      {formData.loading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={formData.loading ? "loading-bar" : "d-none"}></div>
      </section>
    </HelmetProvider>
  );
};
