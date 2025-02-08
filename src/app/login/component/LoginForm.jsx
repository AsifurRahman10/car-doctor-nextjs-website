"use client";

import SocialLogin from "@/Component/SocialLogin";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginForm() {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (res.ok) {
        toast.success("login Successful");
        router.push("/");
        form.reset();
      } else {
        alert("Login failed");
      }
    } catch (error) {
      toast.error("login Successful");
    }
  };
  return (
    <div className="border border-gray-500 p-16 rounded-lg">
      <form onSubmit={handleLogin}>
        <h2 className="font-bold text-3xl text-gray-700 text-center mb-6">
          Login
        </h2>
        {/* email */}
        <div className="form-control">
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
            Login
          </button>
        </div>
      </form>

      {/* social sign */}
      <div>
        <SocialLogin />
      </div>
      <p className="text-center mt-4">
        Have an account?{" "}
        <Link href={"/register"}>
          <span className="text-[#FF3811] font-bold">Sign In</span>
        </Link>
      </p>
    </div>
  );
}
