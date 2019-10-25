import { AuthorModel } from './author.model';

export  interface BookModel {
   id?: number;
   title: string;
   price: number;
   authors: AuthorModel[];
   genre: string;
   description: string;
   coverUrl: string;
   type: string;
 }
