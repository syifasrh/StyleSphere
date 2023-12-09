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

export interface WishlistInputModel {
  userId: ObjectId;
  productId: ObjectId;
}

export const getWishlistByUserId = async (
  userId: string
): Promise<WishlistModel[]> => {
  try {
    const wishlistItems = (await db
      .collection(COLLECTION_NAME)
      .aggregate([
        {
          $match: { userId: new ObjectId(userId) },
        },
        {
          $lookup: {
            from: "Users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "product",
          },
        },
        { $set: { user: { $first: "$user" } } },
        { $set: { product: { $first: "$product" } } },
      ])
      .toArray()) as WishlistModel[];

    return wishlistItems;
  } catch (error) {
    throw new Error(`Error in getWishlistByUserId: ${error}`);
  }
};

export const createWishlistItem = async (
  newWishlistItem: WishlistInputModel
): Promise<WishlistModel> => {
  try {
    const existingItem = await db
      .collection(COLLECTION_NAME)
      .findOne<WishlistModel>({
        userId: newWishlistItem.userId,
        productId: newWishlistItem.productId,
      });

    if (existingItem) {
      return existingItem;
    }

    const wishlistItem: WishlistModel = {
      ...newWishlistItem,
      _id: new ObjectId(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { insertedId } = await db
      .collection(COLLECTION_NAME)
      .insertOne(wishlistItem);

    wishlistItem._id = insertedId;

    return wishlistItem;
  } catch (error) {
    throw error;
  }
};

type WishlistBody = Omit<
  WishlistModel,
  "_id" | "product" | "user" | "createdAt" | "updatedAt"
>;

export const removeWishlistById = async (data: WishlistBody) => {
  try {
    const result = await db.collection(COLLECTION_NAME).deleteOne({
      userId: data.userId,
      productId: data.productId,
    });

    return result;
  } catch (error) {
    throw new Error(`Error in removeWishlistById: ${error}`);
  }
};
