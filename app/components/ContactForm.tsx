"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  showBookAuditButton?: boolean;
  onSubmitSuccess?: () => void;
}

export default function ContactForm({
  title = "Appointment",
  subtitle = "Make an",
  showBookAuditButton = true,
  onSubmitSuccess,
}: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("https://healthapi.digitalparadigm.com.au/api/contact", {
    //   const response = await fetch("http://localhost:5010/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to send form");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });

      // Show SweetAlert2 modal
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your enquiry has been sent successfully. We'll be in touch soon.",
        confirmButtonColor: "#ec4899",
        confirmButtonText: "OK",
      });

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
      <p className="text-sm text-gray-600 md:text-base uppercase font-semibold tracking-wider mb-2">
        {subtitle}
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
        {title}
      </h3>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
            >
              <option value="">Select a service</option>
              <option>Custom Web Development</option>
              <option>MVP Development</option>
              <option>SaaS Development</option>
              <option>Enterprise Software Development</option>
              <option>Web Portal Development</option>
              <option>UI/UX Design</option>
              <option>Responsive Web Design</option>
              <option>Graphic Design</option>
              <option>SEO</option>
              <option>Social Media Marketing</option>
              <option>Influencer Marketing</option>
              <option>PPC</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Budget Range
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            placeholder="e.g. $5k - $15k"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your project, goals, and any specific features you need..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent resize-none"
          />
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {loading ? "Sending..." : "Send Enquiry"}
          </button>
          {showBookAuditButton && (
            <a
              href="https://calendly.com/digitalparadigm/product-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Book a Free Audit
            </a>
          )}
        </div>
      </form>
    </div>
  );
}
