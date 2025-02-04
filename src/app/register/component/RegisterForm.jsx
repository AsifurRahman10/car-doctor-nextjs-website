"use client";

import { registerUser } from "@/app/actions/auth/registerUser";
import SocialLogin from "@/Component/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const payload = { name, email, password };
    await registerUser(payload);
    toast.success("Sign up successful");
    router.push("/");
  };
  return (
    <div className="border border-gray-500 p-16 rounded-lg">
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl text-gray-700 text-center mb-6">
          Sign Up
        </h2>
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium text-lg">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            required
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text font-medium text-lg">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>

        {/* password */}
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text font-medium text-lg">Password</span>
          </label>
          <input
            type="Password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
            name="password"
          />
        </div>
        {/* button */}
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn bg-[#FF3811] text-white font-semibold text-lg"
          >
            Register
          </button>
        </div>
      </form>

      {/* social sign */}
      <div>
        <SocialLogin />
      </div>
      <p className="text-center mt-4">
        Already have an account?
        <Link href={"/login"}>
          <span className="text-[#FF3811] font-bold"> Login</span>
        </Link>
      </p>
    </div>
  );
}
