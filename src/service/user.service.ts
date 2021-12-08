import { DocumentDefinition, Mongoose } from "mongoose";
import mongoose from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getUsers() {
    try {
      return await UserModel.find();
    } catch (e: any) {
      throw new Error(e);
    }
  }
