export class Book {
    id: number;
    bookName: string;
    bookAuthor: string;
    bookPages: number;
    bookTags: Tags;
}

enum Tags { Financial, History, Literature, Philosophy, Psychology, Politics, Science }