"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";

export async function auth() {
  const session = await getServerSession(authOptions);
  return session;
}
