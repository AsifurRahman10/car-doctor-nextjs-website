"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function CheckoutForm({ data }) {
  const { title, img, price, _id } = data;
  const { data: session } = useSession();

  const handleCheckoutForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const presentAddress = form.dueAmount.value;

    const payload = {
      // session
      customerName: session?.user?.name,
      email: session?.user?.email,

      //user input
      date,
      phone,
      presentAddress,
      // extra info
      serviceId: _id,
      serviceTitle: title,
      servicePrice: price,
      serviceImage: img,
    };
    const res = await fetch(
      "https://nextjs-car-service-website.vercel.app/api/service",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Booking completed");
      form.reset();
    }
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleCheckoutForm}>
        {/* Name & Date Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
              defaultValue={session?.user?.name}
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Email & Due Amount Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2 lg:mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
              defaultValue={session?.user?.email}
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="number"
              name="dueAmount"
              placeholder="Enter due amount"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Phone & Present Address Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2 lg:mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Present Address</span>
            </label>
            <input
              type="text"
              name="presentAddress"
              placeholder="Enter your address"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center w-9/12 mx-auto">
          <button
            type="submit"
            className="btn bg-[#FF3811] text-white text-lg w-full hover:text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
