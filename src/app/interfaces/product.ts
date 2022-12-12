import { IRating } from "./rating";

export interface IProduct {
    title: string;
    id: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}