import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

// Define the types for form data
interface FormData {
  fullname: string;
  emailAddress: string;
  message: string;
}

const Contact: React.FC = () => {
  // State to hold form data with type annotation
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    emailAddress: '',
    message: ''
  });

  // Handler for input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevent form reload

    const UserInfo = {
      fullname: formData.fullname,
      emailAddress: formData.emailAddress,
      message: formData.message
    };

    try {
      // Replace with your actual Getform endpoint URL
      await axios.post('https://getform.io/f/bpjneonb', UserInfo);
      toast.success("Your message was sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was an issue sending your message. Please try again.");
    }

    // Reset the form fields after submission
    setFormData({
      fullname: '',
      emailAddress: '',
      message: ''
    });
  };

  return (
    <div className="pt-24">
      <div className="container section">
        <h1 className="section-title text-center" data-aos="fade-up">Contact Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Feel free to contact me for any work or suggestions. I'm always open to discussing new projects,
              creative ideas or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 text-white mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">Prem Nagar , Dehradun, Uttarakhand</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 text-white mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">dhirajraj97084@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary rounded-full p-3 text-white mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600"> (+91) 7633061405</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-primary">Send Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Full Name..."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Email..."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-2 px-4 rounded"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
