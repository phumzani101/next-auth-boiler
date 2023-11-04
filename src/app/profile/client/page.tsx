"use client";
import { useSession } from "next-auth/react";
import React from "react";
import Profile from "../components/Profile";

const ClientPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1 className="h1 font-semibold">Profile Client Page</h1>
      <Profile user={session?.user} />
    </div>
  );
};

export default ClientPage;
