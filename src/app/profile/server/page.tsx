import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import React from "react";
import Profile from "../components/Profile";

const ServerPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="h1 font-semibold">Profile Server Page</h1>
      <Profile user={session?.user} />
    </div>
  );
};

export default ServerPage;
