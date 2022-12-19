import { User } from "./user.model";

export class Customer{
    id?: number;
    name?: string;
    contact?: string;
    walletballance?: number;
    user: User;
}