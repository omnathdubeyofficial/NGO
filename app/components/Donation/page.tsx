"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import html2canvas from "html2canvas";

// Define a custom type for the event
type InputEvent = {
  target: {
    name: string;
    value: string;
  };
};

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
  });
  const [paymentDetails, setPaymentDetails] = useState<{
    payment_id: string;
    amount: number;
    date: string;
    name: string;
    email: string;
  } | null>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const fixedAmounts = ["2000", "4000", "8000"];

  useEffect(() => {
    // Set razorpayLoaded to true when the script loads
    if ((window as any).Razorpay) {
      setRazorpayLoaded(true);
    }
  }, []);

  const handleInputChange = (e: InputEvent) => {
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

  const generateReceipt = async () => {
    const receiptElement = document.getElementById("receipt");
    if (receiptElement) {
      const canvas = await html2canvas(receiptElement, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `Donation_Receipt_${paymentDetails?.payment_id}.png`;
      link.click();
    }
  };

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      alert("Razorpay SDK is not loaded. Please try again.");
      return;
    }

    const amount = getFinalAmount();
    if (!amount || amount <= 0) return alert("Please enter a valid amount");
    if (!formData.email || !formData.mobile)
      return alert("Please fill in required fields");

    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      if (!res.ok) throw new Error("Failed to create Razorpay order");

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY || "YOUR_RAZORPAY_KEY",
        amount: data.amount,
        currency: "INR",
        name: "Bhagirath Sahayog Seva Sansthan",
        description: "Donation for a Better Tomorrow",
        order_id: data.id,
        handler: async function (response: { razorpay_payment_id: string }) {
          setPaymentDetails({
            payment_id: response.razorpay_payment_id,
            amount: amount,
            date: new Date().toLocaleString("en-IN", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
          });
          alert("✅ Payment Successful!");
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          contact: formData.mobile,
        },
        notes: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          country: formData.country,
          city: formData.city,
          state: formData.state,
          pin: formData.pin,
          address: formData.address,
          pan: formData.pan,
        },
        theme: {
          color: "#1B4332",
        },
      };

      if ((window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", () => {
          alert("❌ Payment Failed. Please try again.");
        });
        rzp.open();
      } else {
        alert("Razorpay SDK is not available. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("❌ Payment Failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 py-44 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-offwhite shadow-2xl p-6 sm:p-10 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900">
            Support Our Cause
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Your generosity fuels our mission for a better tomorrow.
          </p>
          <div className="bg-[#FEE2E2] border-l-4 border-[#DC2626] text-[#7F1D1D] p-5 rounded-xl shadow-lg max-w-xl mx-auto mt-6">
            <p className="font-semibold text-base flex items-left">
              🧾 <span className="ml-2">Important:</span>
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-left leading-relaxed">
              <li>This receipt can be downloaded only once.</li>
              <li>Do not click back or reload the page.</li>
              <li>We are not responsible if the receipt is lost.</li>
            </ul>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
          {fixedAmounts.map((amt) => (
            <button
              key={amt}
              onClick={() => handleInputChange({ target: { name: "amount", value: amt } })}
              className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 ${
                formData.amount === amt
                  ? "bg-navyblue text-white shadow-lg"
                  : "border border-gray-400 focus:outline-none focus:border-blue-500 text-black hover:bg-green-200"
              }`}
            >
              ₹{amt}
            </button>
          ))}
          <button
            onClick={() => handleInputChange({ target: { name: "amount", value: "custom" } })}
            className={`px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm sm:text-base transition-all duration-300 ${
              formData.amount === "custom"
                ? "bg-navyblue text-white shadow-lg"
                : "border border-gray-400 focus:outline-none focus:border-blue-500 text-black hover:bg-green-200"
            }`}
          >
            Other Amount
          </button>
        </div>

        {formData.amount === "custom" && (
          <input
            type="number"
            name="customAmount"
            placeholder="Enter Amount (₹)"
            className="w-full p-3 sm:p-4 border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
            min="1"
          />
        )}

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number *"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
            required
            pattern="[0-9]{10}"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="pin"
            placeholder="PIN Code"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input p-3 border border-gray-400 focus:outline-none focus:border{Paused here due to character limit; continuing below}

-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
          <input
            type="text"
            name="pan"
            placeholder="PAN Card Number"
            className="input p-3 border border-gray-400 focus:outline-none focus:border-blue-500"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange({ target: { name: e.target.name, value: e.target.value } })
            }
          />
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-navyblue hover:bg-green-800 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          Proceed to Pay
        </button>
      </div>

      {/* Receipt Modal */}
      {paymentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div
            id="receipt"
            className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f0fff4, #ffffff)",
              border: "2px solid #1B4332",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-green-700" />
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-green-900">
                Donation Receipt
              </h3>
              <p className="text-sm text-gray-500 mt-1">Bhagirath Sahayog Seva Sansthan</p>
            </div>
            <div className="border-t-2 border-b-2 border-gray-200 py-4 space-y-3">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="font-semibold text-gray-700">Payment ID:</span>
                <span className="text-gray-900">{paymentDetails.payment_id}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="font-semibold text-gray-700">Name:</span>
                <span className="text-gray-900">{paymentDetails.name}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="font-semibold text-gray-700">Email:</span>
                <span className="text-gray-900">{paymentDetails.email}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="font-semibold text-gray-700">Amount:</span>
                <span className="text-gray-900">₹{paymentDetails.amount}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="font-semibold text-gray-700">Date:</span>
                <span className="text-gray-900">{paymentDetails.date}</span>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm sm:text-base mt-4">
              Thank you for your generous donation to Bhagirath Sahayog Seva Sansthan!
            </p>
            <p className="text-center text-gray-500 text-xs mt-2">
              Your support makes a difference.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-green-700" />
            <div className="flex gap-4 mt-6 max-w-md w-full">
              <button
                onClick={generateReceipt}
                className="flex-1 bg-navyblue text-white py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-green-800 transition-all shadow-md"
              >
                Download Receipt
              </button>
              <button
                onClick={() => setPaymentDetails(null)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-gray-300 transition-all shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onLoad={() => setRazorpayLoaded(true)}
      />
    </div>
  );
}

// Custom Input Style
const inputStyle = `
  .input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition: all 0.2s ease-in-out;
  }
  .input:focus {
    outline: none;
    ring: 2px;
    ring-color: #10b981;
    border-color: #10b981;
  }
  @media (min-width: 640px) {
    .input {
      padding: 1rem;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;