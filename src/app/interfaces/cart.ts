import { ICartProduct } from "./cartproduct";
import { IProduct } from "./product";

export interface ICart {
    products?: ICartProduct[],
    total: number;
    totalQuantity: number;
}