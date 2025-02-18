import { useState } from 'react';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }
  };

  return (
    <div className="p-5 container text-light">
      <h1 className="text-pretty">Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="mt-3">
            <label class="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error form-control" : "form-control"}
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          <div className="mt-3">
            <label class="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error form-control" : "form-control"}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          <div className="mt-3">
            <label class="form-label">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error form-control" : "form-control"}
            ></textarea>
            {errors.message && <small className="error-text">{errors.message}</small>}
          </div>

          <button type="submit" className="mt-5 btn btn-primary border-0">Send Message</button>
        </form>
    </div>
  );
}
