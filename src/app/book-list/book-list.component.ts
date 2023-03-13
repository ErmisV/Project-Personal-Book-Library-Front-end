import { Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book[];
  
  constructor() { }

  ngOnInit(): void {
    this.books = [{
      "id" : 1 ,
      "bookName" :  "Meditations",
      "bookAuthor" : "Marcus Aurelius",
      "bookTag" : "Philosophy",
      "bookPages" : 200
    }
  ]
  }

}
