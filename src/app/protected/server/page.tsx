import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import React from "react";

const ServerPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Protected Server Page</h1>
      <p>Logged in as: {session?.user?.name}</p>
    </div>
  );
};

export default ServerPage;
