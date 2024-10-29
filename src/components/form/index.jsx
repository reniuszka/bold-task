import React, { useState } from "react";
import FormInput from "../formInput";
import Button from "../button";
import Fieldset from "../fieldset";

import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let loading = "Loading".toLocaleUpperCase();
  let submit = "Submit now".toLocaleUpperCase();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("EVENT", e);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    r;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";

    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone is required.";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.service) newErrors.service = "Service is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://bold.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error while sending the form");
      }

      setStatusMessage("The form was sent!");
      setFormData({ firstName: "", lastName: "", phone: "", service: "" });
    } catch (error) {
      setStatusMessage(error.message || "Error while sending the form");
    } finally {
      setIsLoading(false);
    }
  };
  console.log("formData", formData, "ERROR", errors);
  return (
    <form onSubmit={handleSubmit}>
      <Fieldset className="fieldset--row">
        <FormInput
          id="first-name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First Name"
          ariaLabel="first name"
        />
        <FormInput
          id="last-name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
          ariaLabel="last name"
        />
      </Fieldset>
      <Fieldset>
        <FormInput
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          type="tel"
          pattern="^\+?[1-9]\d{1,14}$"
          title="Please enter a valid phone number"
          style="full"
          ariaLabel="phone number"
        />
      </Fieldset>
      <Fieldset>
        <FormInput
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          placeholder="What Service are you interested in?"
          style="full"
          ariaLabel="service interested in"
        />
      </Fieldset>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? loading : submit}
      </Button>
      {statusMessage && <div className="status-message">{statusMessage}</div>}
    </form>
  );
};

export default ContactForm;
