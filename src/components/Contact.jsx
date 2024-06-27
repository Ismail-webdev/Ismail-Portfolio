import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send the message, please try again.");
          console.error("Failed to send message:", error);
        }
      );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-10">
      <div className="max-w-[600px] w-full mx-auto px-8 flex flex-col justify-center">
        <p className="text-[#c6c7c8] font-semibold text-lg">Get In Touch</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
          Contact
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0] mt-4">
          I'd love to hear from you!
        </h2>
        <p className="text-[#8892b0] py-4">
          If you have any questions or just want to say hi, feel free to send me
          an email.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-[#1e293b] text-white focus:outline-none focus:ring-2 focus:ring-[#3b82f6] h-32 sm:h-40"
          ></textarea>
          <button
            type="submit"
            className="text-white border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#c6c7c8] hover:text-black rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
