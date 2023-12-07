import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
const secret = process.env.JWT_SECRET;

if (!secret) throw new Error("Token invalid");

export const createToken = (planText: { _id: ObjectId; email: string }) => {
  return jwt.sign(planText, secret);
};
