import { Db, ObjectId } from "mongodb";
import { client } from "../config/mongo";

const DATABASE_NAME = process.env.DATABASE_NAME;
const COLLECTION_NAME = "Products";
const db: Db = client.db(DATABASE_NAME);

export interface ProductModel {
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

export const getProducts = async (): Promise<ProductModel[]> => {
  const products = await db.collection(COLLECTION_NAME).find({}).toArray();

  return products;
};

export const getProductById = async (
  id: string
): Promise<ProductModel | null> => {
  try {
    const product = await db
      .collection(COLLECTION_NAME)
      .findOne<ProductModel>({ _id: new ObjectId(id) });

    return product;
  } catch (error) {
    throw error;
  }
};

type ProductInputModel = Omit<ProductModel, "_id">;

export const createProduct = async (
  newProduct: ProductInputModel
): Promise<ProductModel> => {
  const { insertedId } = await db
    .collection(COLLECTION_NAME)
    .insertOne(newProduct);

  return { ...newProduct, _id: insertedId };
};
