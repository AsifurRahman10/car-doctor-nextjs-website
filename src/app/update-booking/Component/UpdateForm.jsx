"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateForm({ data }) {
  const { date, phone, presentAddress, _id } = data;
  const { data: session } = useSession();
  const route = useRouter();

  const handleUpdateData = async (e) => {
    e.preventDefault();

    const form = e.target;
    const date = form.date.value;
    const phone = form.phone.value;
    const presentAddress = form.presentAddress.value;

    const payload = {
      //user input
      date,
      phone,
      presentAddress,
    };
    const res = await fetch(
      `https://nextjs-car-service-website.vercel.app/api/my-booking/${_id}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
      }
    );

    const postedResponse = await res.json();
    if (postedResponse.modifiedCount > 0) {
      toast.success("Booking completed");
      form.reset();
      route.push("/my-bookings");
    }
  };
  return (
    <div className="mt-10">
      <form onSubmit={handleUpdateData}>
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
              defaultValue={date}
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
              disabled
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
              defaultValue={phone}
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
              defaultValue={presentAddress}
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
