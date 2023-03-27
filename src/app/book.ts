export class Book {
   
    id: number;
    bookName: string;
    bookAuthor: string;
    bookPages: number;
    bookReads: number;
    bookTags: Tags;

}      
export interface Viv {
  
     id: number;
     bookName: string;
     bookAuthor: string;
     bookPages: number;
     bookReads: number;
     bookTags: Tags;
   
}

enum Tags { Financial, History, Literature, Philosophy, Psychology, Politics, Science }

