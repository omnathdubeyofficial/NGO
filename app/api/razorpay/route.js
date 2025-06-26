import Razorpay from "razorpay";
console.log("💡 RAZORPAY_KEY_ID =>", process.env.RAZORPAY_KEY_ID);
console.log("💡 RAZORPAY_SECRET =>", process.env.RAZORPAY_SECRET);

export async function POST(req) {
  const body = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,

    
  });

  const options = {
    amount: body.amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "donation_receipt_" + Date.now(),
  };

  const order = await instance.orders.create(options);
  return Response.json(order);
}
