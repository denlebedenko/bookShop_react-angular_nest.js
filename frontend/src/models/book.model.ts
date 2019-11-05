import { AuthorModel } from './author.model';

export  interface BookModel {
   id: string;
   _id?:string;
   title: string;
   price: number;
   authors: AuthorModel[];
   genre: string;
   description: string;
   coverUrl: string;
   type: string;
 }
