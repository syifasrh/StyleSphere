import { Db, ObjectId } from "mongodb";
import { client } from "../config/mongo";
import { hashPass } from "../utils/hash";

const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = "Users";
const db: Db = client.db(DATABASE_NAME);

export interface UserModel {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const getUser = async (): Promise<UserModel[]> => {
  const users = await db
    .collection(COLLECTION_NAME)
    .find({})
    .project<UserModel>({ password: 0 })
    .toArray();

  return users;
};

export const getUserById = async (id: string): Promise<UserModel | null> => {
  try {
    const user = await db
      .collection(COLLECTION_NAME)
      .findOne<UserModel>({ _id: new ObjectId(id) });

    return user;
  } catch (error) {
    throw error;
  }
};

type UserInputModel = Omit<UserModel, "_id">;

export const createUser = async (
  newUser: UserInputModel
): Promise<UserModel> => {
  newUser = {
    ...newUser,
    password: hashPass(newUser.password),
  };

  const { insertedId } = await db
    .collection(COLLECTION_NAME)
    .insertOne(newUser);

  return { ...newUser, _id: insertedId };
};

export const getUserByEmail = async (
  email: string
): Promise<UserModel | null> => {
  try {
    const user = await db
      .collection(COLLECTION_NAME)
      .findOne<UserModel>({ email: email });

    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByUsername = async (
  username: string
): Promise<UserModel | null> => {
  try {
    const user = await db
      .collection(COLLECTION_NAME)
      .findOne<UserModel>({ username: username });

    return user;
  } catch (error) {
    throw error;
  }
};
