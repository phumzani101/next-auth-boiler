"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
