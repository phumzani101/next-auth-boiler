"use client";
import { useSession } from "next-auth/react";
import React from "react";

const ClientPage = () => {
  const { data } = useSession();
  return (
    <div>
      <h1>Protected Client Page</h1>
      <p>Logged in as: {data?.user?.name}</p>
    </div>
  );
};

export default ClientPage;
