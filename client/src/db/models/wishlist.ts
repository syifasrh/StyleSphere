import { Db, ObjectId } from "mongodb";
import { client } from "../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = "Wishlist";
const db: Db = client.db(DATABASE_NAME);

export interface WishlistModel {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export const getWishlistByUserId = async (
  userId: string
): Promise<WishlistModel[]> => {
  try {
    const wishlistItems = await db
      .collection(COLLECTION_NAME)
      .find<WishlistModel>({ userId: new ObjectId(userId) })
      .toArray();

    return wishlistItems;
  } catch (error) {
    throw error;
  }
};

type WishlistInputModel = Omit<WishlistModel, "_id">;

export const createWishlistItem = async (
  newWishlistItem: WishlistInputModel
): Promise<WishlistModel> => {
  const { insertedId } = await db
    .collection(COLLECTION_NAME)
    .insertOne(newWishlistItem);

  return { ...newWishlistItem, _id: insertedId };
};

export const removeWishlistById = async (id: string): Promise<void> => {
  try {
    await db.collection(COLLECTION_NAME).deleteOne({ _id: new ObjectId(id) });
  } catch (error) {
    throw error;
  }
};
