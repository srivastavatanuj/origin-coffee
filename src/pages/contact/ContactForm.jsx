"use client";
import * as React from "react";
import { useState } from "react";
import { FormInput, FormTextArea } from "./FormField";
import ContactLogic from "./ContactLogic";

export function ContactForm() {
  const { error, isLoading, handleSubmit } = ContactLogic();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.firstName + " " + formData.lastName;
    formData.name = name;
    handleSubmit(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="mt-16">
      <form onSubmit={handleFormSubmit}>
        <p className="my-4">Name (required)</p>
        <div className="grid gap-5 mb-8 grid-cols-[1fr_1fr]">
          <FormInput
            label="First Name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
            required
          />
          <FormInput
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
            required
          />
        </div>

        <FormInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          required
          className="mb-8"
        />

        <FormInput
          label="Subject"
          value={formData.subject}
          onChange={handleChange("subject")}
          required
          className="mb-8"
        />

        <FormTextArea
          label="Message"
          value={formData.message}
          onChange={handleChange("message")}
          required
          className="mb-8"
        />

        <button type="submit" disabled={isLoading} className="siteButton">
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}
