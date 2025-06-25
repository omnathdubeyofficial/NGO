"use client";

import React, { useState } from "react";
import Script from "next/script";

export default function DonationForm() {
  const [formData, setFormData] = useState({
    amount: "",
    customAmount: "",
    email: "",
    mobile: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    state: "",
    pin: "",
    address: "",
    pan: "",
    installments: "36",
  });

  const fixedAmounts = ["2000", "4000", "8000"];

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getFinalAmount = () => {
    return formData.amount === "custom"
      ? parseInt(formData.customAmount || "0")
      : parseInt(formData.amount || "0");
  };

  const handlePayment = async () => {
    const amount = getFinalAmount();
    if (!amount || amount <= 0) return alert("Please enter a valid amount");

    const res = await fetch("/api/razorpay", {
      method: "POST",
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: data.amount,
      currency: "INR",
      name: "Your NGO Name",
      description: "Monthly Donation",
      order_id: data.id,
      handler: async function (response) {
        alert("✅ Payment Successful!");
        // Later: redirect to receipt page
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.mobile,
      },
      theme: {
        color: "#1B4332",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
        <h2 className="text-3xl font-extrabold text-center text-green-700">Make a Monthly Contribution</h2>

        {/* Amount Selection */}
        <div className="flex flex-wrap gap-4 justify-center">
          {fixedAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => handleInputChange({ target: { name: "amount", value: amt } })}
              className={`px-5 py-2 rounded-full border font-semibold ${
                formData.amount === amt
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              } hover:bg-green-600 hover:text-white transition`}
            >
              ₹{amt}
            </button>
          ))}
          <button
            onClick={() => handleInputChange({ target: { name: "amount", value: "custom" } })}
            className={`px-5 py-2 rounded-full border font-semibold ${
              formData.amount === "custom"
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 border-gray-300"
            } hover:bg-green-600 hover:text-white transition`}
          >
            Other
          </button>
        </div>

        {formData.amount === "custom" && (
          <input
            type="number"
            name="customAmount"
            placeholder="Other Amount ₹"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600"
            onChange={handleInputChange}
          />
        )}

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="installments" placeholder="Installments (e.g., 36)" className="input" onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email Address *" className="input" onChange={handleInputChange} />
          <input type="tel" name="mobile" placeholder="Mobile Number *" className="input" onChange={handleInputChange} />
          <input type="text" name="firstName" placeholder="First Name" className="input" onChange={handleInputChange} />
          <input type="text" name="lastName" placeholder="Last Name" className="input" onChange={handleInputChange} />
          <input type="text" name="country" placeholder="Country" className="input" onChange={handleInputChange} />
          <input type="text" name="state" placeholder="State" className="input" onChange={handleInputChange} />
          <input type="text" name="city" placeholder="City" className="input" onChange={handleInputChange} />
          <input type="text" name="pin" placeholder="PIN Code" className="input" onChange={handleInputChange} />
          <input type="text" name="address" placeholder="Flat/House No./Building" className="input" onChange={handleInputChange} />
          <input type="text" name="pan" placeholder="PAN Card Number" className="input" onChange={handleInputChange} />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-navyblue hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition"
        >
          💳 Proceed to Pay
        </button>
      </div>

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
  );
}

// Custom Input Style via Tailwind className shortcut
const inputStyle = `w-full p-3 border border-gray-300 rounded-lg focus:ring-green-600 focus:border-green-600`;
