import { useMutation } from "react-query";
import useApi from "../../APIs/useApi";
import { useState } from "react";

const ContactLogic = () => {
  const { sendContactQuery } = useApi();
  const [error, setError] = useState(null);

  const { mutate: sendContact, isLoading } = useMutation(
    (contactData) => sendContactQuery(contactData),
    {
      onSuccess: (response) => {
        alert("Message sent successfully, our team will contact you shortly");
        setError(null);
      },
      onError: (error) => {
        alert("Error", error);
      },
    }
  );

  const handleSubmit = (contactData) => {
    sendContact(contactData);
  };

  return {
    error,
    isLoading,
    handleSubmit,
  };
};

export default ContactLogic;
