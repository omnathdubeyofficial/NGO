'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function JoinForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: '',
    whatsappNumber: '',
    email: '',
    profession: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pinCode: '',
    country: 'India',
    motivation: '',
    skills: '',
    availability: '',
  });
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};


  const handleSubmit = async () => {
    // Basic client-side validation
    if (!formData.firstName || !formData.email || !formData.mobileNumber || !formData.motivation) {
      setStatus('Please fill all required fields.');
      setShowPopup(true);
      return;
    }

    setStatus('Sending...');
    setShowPopup(true);

    try {
      const res = await fetch('/api/send-join-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Application submitted successfully!');
        setFormData({
          firstName: '',
          middleName: '',
          lastName: '',
          mobileNumber: '',
          whatsappNumber: '',
          email: '',
          profession: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: '',
          pinCode: '',
          country: 'India',
          motivation: '',
          skills: '',
          availability: '',
        });
      } else {
        setStatus('Failed to submit. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setStatus('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-4">
          Join Bhagirath Sahayog Seva Sansthan
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Be a part of our mission to create positive impact. Complete the form below to join our NGO.
        </p>
        <div className="space-y-8">
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Middle Name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Middle Name"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="e.g., +91 1234567890"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="e.g., +91 1234567890"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          {/* Email and Profession */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                placeholder="e.g., Teacher, Engineer"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Address Line 1 *</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Street Address"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Apartment, Suite, etc. (optional)"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pin Code *</label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="Pin Code"
                  required
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              >
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Why do you want to join our NGO? *
            </label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              placeholder="Share your motivation for joining Bhagirath Sahayog Seva Sansthan"
              required
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition h-36"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills/Expertise (e.g., Fundraising, Teaching)
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="List your skills"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Availability (e.g., Hours per week)
              </label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="e.g., 10 hours/week"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3 bg-navyblue text-white rounded-lg hover:bg-blue-800 transition duration-300 text-lg font-semibold"
            >
              Submit Application
            </button>
          </div>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl relative">
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center mb-4">
                <FontAwesomeIcon
                  icon={status.includes('successfully') ? faCheckCircle : faExclamationCircle}
                  className={`w-10 h-10 ${status.includes('successfully') ? 'text-[#28a745]' : 'text-[#dc3545]'}`}
                />
              </div>
              <p className="text-center text-lg font-medium text-gray-800">{status}</p>
              <div className="text-center mt-6">
                {/* <button
                  onClick={closePopup}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}