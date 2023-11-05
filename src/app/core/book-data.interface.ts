import { Book } from "./book.interface";
import { UserAction } from "./user-action.enum";

export interface BookData{
    book:Book,
    bookIndex:number,
    userAction?:UserAction
}