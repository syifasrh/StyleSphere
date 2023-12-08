import { Db, ObjectId } from "mongodb";
import { client } from "../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = "Products";
const db: Db = client.db(DATABASE_NAME);

export interface  ProductModel {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const productPagination = async (
  pageStart: number = 1,
  pageSize: number = 5
): Promise<ProductModel[]> => {
  try {
    const products = await db
      .collection(COLLECTION_NAME)
      .find<ProductModel>([])
      .skip((pageStart - 1) * pageSize)
      .limit(pageSize)
      .toArray();

    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductBySlug = async (
  slug: string
): Promise<ProductModel | null> => {
  try {
    const product = await db
      .collection(COLLECTION_NAME)
      .findOne<ProductModel>({ slug });

    return product;
  } catch (error) {
    throw error;
  }
};


