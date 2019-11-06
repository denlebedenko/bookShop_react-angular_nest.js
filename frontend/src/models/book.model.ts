import { AuthorModel } from './author.model';

export  interface BookModel {
   id: string;
   _id?: string | undefined;
   title: string;
   price: number;
   authors: AuthorModel[];
   genre: string;
   description: string;
   coverUrl: string;
   type: string;
 }
