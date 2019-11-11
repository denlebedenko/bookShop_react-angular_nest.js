import { UserDataModel } from "models/user/user-data.model";
import { QueryBook } from "models/filter/query-books.model";
import { CartState } from "store/cart/reducer";

export interface AppState {
    readonly auth:  UserDataModel,
    readonly query: QueryBook,
    readonly cart: CartState,    
}