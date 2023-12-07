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

export const getWishlistItems = async (): Promise<WishlistModel[]> => {
  const wishlistItems = await db.collection(COLLECTION_NAME).find<WishlistModel>({}).toArray();

  return wishlistItems;
};

export const getWishlistById = async (
  id: string
): Promise<WishlistModel | null> => {
  try {
    const wishlistItem = await db
      .collection(COLLECTION_NAME)
      .findOne<WishlistModel>({ _id: new ObjectId(id) });

    return wishlistItem;
  } catch (error) {
    throw error;
  }
};

type WishlistItemInputModel = Omit<WishlistModel, "_id">;

export const createWishlistItem = async (
  newWishlistItem: WishlistItemInputModel
): Promise<WishlistModel> => {
  const { insertedId } = await db
    .collection(COLLECTION_NAME)
    .insertOne(newWishlistItem);

  return { ...newWishlistItem, _id: insertedId };
}
