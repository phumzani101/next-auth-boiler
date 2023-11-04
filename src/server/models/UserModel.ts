import { Schema, model, models, Document } from "mongoose";

export interface UserType extends Document {
  name: string;
  email: string;
  image?: string;
  password?: string;
  role: string;
  provider?: string;
  emailVerified: Date;
  accounts: Schema.Types.ObjectId[];
  sessions: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    role: { type: String, default: "user" },
    provider: { type: String, default: "credentials" },
    emailVerified: Date,
    accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
    sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
  },
  { timestamps: true }
);

const UserModel = models.User || model("User", UserSchema);

// Create a Mongoose schema for the Account model
const AccountSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: Schema.Types.ObjectId,
  },
  userId: { type: String, required: true },
  type: { type: String, required: true },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true, unique: true },
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
});

const AccountModel = model("Account", AccountSchema);

// Create a Mongoose schema for the Session model
const SessionSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    default: Schema.Types.ObjectId,
  },
  sessionToken: { type: String, required: true, unique: true },
  userId: { type: String, required: true },
  expires: Date,
});

const SessionModel = model("Session", SessionSchema);

// Create a Mongoose schema for the VerificationToken model
const VerificationTokenSchema = new Schema({
  identifier: String,
  token: { type: String, required: true, unique: true },
  expires: Date,
});

const VerificationTokenModel = model(
  "VerificationToken",
  VerificationTokenSchema
);

module.exports = {
  AccountModel,
  SessionModel,
  UserModel,
  VerificationTokenModel,
};
