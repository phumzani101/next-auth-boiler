"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SocialLogin = ({ callbackUrl }: { callbackUrl: string }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <button
        onClick={() => signIn("github", { callbackUrl })}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Signin with Github
      </button>
      <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Signin with Google
      </button>
    </div>
  );
};

export default SocialLogin;
