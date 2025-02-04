"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function SocialLogin() {
  const session = useSession();
  const router = useRouter();
  const handleSocialLogin = async (type) => {
    signIn(type, { redirect: false });
  };

  useEffect(() => {
    if (session.status == "authenticated") {
      router.push("/");
      toast.success("login successful");
    }
  }, [session.status]);
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      <button
        onClick={() => handleSocialLogin("google")}
        className="bg-[#F5F5F8] p-4 rounded-full btn"
      >
        <FaGoogle className="text-blue-600" />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="bg-[#F5F5F8] p-4 rounded-full btn"
      >
        <FaGithub className="text-blue-600" />
      </button>
    </div>
  );
}
