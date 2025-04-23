"use client";
import * as React from "react";
import { useState } from "react";
import { FormInput, FormTextArea } from "./FormField";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  async function submitForm() {
    event.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  }

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="mt-16">
      <form onSubmit={submitForm}>
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

        <button className="siteButton" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
