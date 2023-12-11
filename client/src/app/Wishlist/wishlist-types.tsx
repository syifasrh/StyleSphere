import { ObjectId } from "mongodb";
import { UserModel } from "@/db/models/users";
import { ProductModel } from "@/db/models/products";

export interface WishlistItems {
  _id: ObjectId;
  userId: ObjectId;
  user: UserModel[];
  productId: ObjectId;
  product: ProductModel;
  createdAt: Date;
  updatedAt: Date;
}
