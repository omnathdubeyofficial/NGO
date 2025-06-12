"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Razorpay global declaration
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; amount?: string }>({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  const handleAmountSelection = (amount: number) => {
    setSelectedAmount(amount);
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const handleSubmit = () => {
    const validationErrors: { name?: string; mobile?: string; amount?: string } = {};
    if (!name.trim()) validationErrors.name = "Please enter your name!";
    if (!mobile.trim()) validationErrors.mobile = "Please enter mobile number!";
    else if (!/^[0-9]{10}$/.test(mobile)) validationErrors.mobile = "Please enter a valid mobile number!";
    if (selectedAmount === null) validationErrors.amount = "Please select a donation amount!";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    initiatePayment();
  };

  const initiatePayment = () => {
    if (typeof window.Razorpay === "undefined") return console.error("Razorpay SDK not loaded");

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
      amount: selectedAmount! * 100,
      currency: "INR",
      name: "Bhagirath Sahayog Seva Sansthan",
      description: "Thank you for your donation",
      handler: function (response: any) {
        console.log("Payment successful!", response);
        setIsModalOpen(false);
        setName("");
        setMobile("");
        setSelectedAmount(null);
        setErrors({});
      },
      prefill: {
        name: name,
        contact: mobile,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      {/* Left Carousel Section */}
      <div className="animate-fade-in-left">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <Image src="https://images.pexels.com/photos/40784/drops-of-water-water-nature-liquid-40784.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" width={600} height={400} className="rounded-xl" />
          </div>
          <div>
            <Image src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" width={600} height={400} className="rounded-xl" />
          </div>
          <div>
            <Image src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 3" width={600} height={400} className="rounded-xl" />
          </div>
        </Carousel>
      </div>

      {/* Right Content Section */}
      <div className="space-y-6 animate-fade-in-right">
        <h2 className="text-xl font-semibold text-green-700">Bhagirath Sahayog Seva Sansthan</h2>
        <h1 className="text-4xl lg:text-6xl font-bold text-darkpurple leading-tight">
          Walk Together,<br />Change Society!
        </h1>
        <p className="text-lg text-gray-700 max-w-xl">
          Bhagirath Sahayog Seva Sansthan is a dedicated initiative working towards community development, education,
          and empowerment. Join hands with us in this journey of transformation.
        </p>
        <button
          onClick={toggleModal}
          className="bg-blue text-white px-8 py-3 rounded-full hover:bg-hoblue shadow-lg transition"
        >
          Donate Now
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md animate-fade-in-up">
            <h2 className="text-center text-xl font-bold mb-4">Donation Form</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((prev) => ({ ...prev, name: "" }));
              }}
              className="border p-2 w-full rounded mb-2"
            />
            {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
                setErrors((prev) => ({ ...prev, mobile: "" }));
              }}
              className="border p-2 w-full rounded mb-2"
            />
            {errors.mobile && <p className="text-red-500 text-sm mb-2">{errors.mobile}</p>}

            <div className="grid grid-cols-3 gap-2 my-4">
              {[1, 11, 51, 101, 501, 1001, 2001, 5001, 10001].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountSelection(amount)}
                  className={`p-2 rounded border text-sm font-semibold transition ${{
                    true: "bg-blue text-white",
                    false: "hover:bg-gray-100",
                  }[selectedAmount === amount]}`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            {errors.amount && <p className="text-red-500 text-sm mb-2">{errors.amount}</p>}

            <div className="flex justify-end gap-4">
              <button onClick={toggleModal} className="text-gray-600">Cancel</button>
              <button onClick={handleSubmit} className="bg-blue text-white px-4 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;