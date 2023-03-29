export class Book {
   
    id: number;
    bookName: string;
    bookAuthor: string;
    bookPages: number;
    bookReads: number;
    bookProgress: number;
    bookTags: Tags;
    
    /*
    setPages(bookPages:number){
        this.bookPages=bookPages;
    }
    getPages(): number{
        return this.bookPages;
    }
    */
}      




enum Tags { Financial, History, Literature, Philosophy, Psychology, Politics, Science }

