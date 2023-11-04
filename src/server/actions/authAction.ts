"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import UserModel from "../models/UserModel";
import mongodbConnect from "@/lib/mongodbConnect";
import { Account, Profile, User } from "next-auth";

export async function auth() {
  const session = await getServerSession(authOptions);
  return session;
}

export async function signUpWithCredentials({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    await mongodbConnect();
    const user = await UserModel.findOne({ email });
    if (user) {
      throw new Error("Email already exist!");
    }
    const newUser = new UserModel({ name, email, password });
    await newUser.save();
    return {
      user: { ...newUser._doc, _id: newUser._id.toString() },
      message: "Successfully registered",
    };
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
}

export async function signInWithCredentials({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await mongodbConnect();
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    if (!user.authenticate(password)) {
      throw new Error("Invalid credentials");
    }

    return { ...user._doc, _id: user._id.toString() };
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
}

export async function signInWithOAuth({
  account,
  profile,
  user,
}: {
  account: Account;
  profile: Profile | undefined;
  user: User;
}) {
  try {
    await mongodbConnect();
    const userM = await UserModel.findOne({ email: profile?.email });

    if (userM) return true; //signin
    //if !user => signup => signin
    const newUser = new UserModel({
      name: user?.name,
      email: user?.email,
      image: user?.image,
      provider: account?.provider,
    });
    await newUser.save();
    return true;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function getUserByEmail({
  email,
}: {
  email: string | undefined | null;
}) {
  try {
    await mongodbConnect();
    if (!email) throw new Error("Email does not exist!");
    const user = await UserModel.findOne({ email }).select("-password");

    if (!user) throw new Error("Email does not exist!");

    return { ...user._doc, _id: user._id.toString() };
  } catch (error: any) {
    throw new Error(error.message);
  }
}
