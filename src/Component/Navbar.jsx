"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const { status } = useSession();
  const navList = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blogs"}>Blog</Link>
      </li>
      <li>
        <Link href={"/my-bookings"}>My Bookings</Link>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold text-gray-600"
            >
              {navList}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              width={100}
              height={85}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold text-gray-600">
            {navList}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {status === "authenticated" ? (
            <>
              <button
                onClick={() => signOut()}
                className="btn text-white bg-[#FF3811] rounded px-8 font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <button className="btn bg-[#FF3811] text-white px-8">
                  Login
                </button>
              </Link>
              <button className="btn btn-outline border-[#FF3811] text-[#FF3811] rounded px-8 font-semibold">
                Appointment
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
