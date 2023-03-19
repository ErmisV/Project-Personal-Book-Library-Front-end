import { Component, OnInit} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ThemePalette} from '@angular/material/core';


@Component({
  selector: 'app-book-progress',
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.css']
})
export class BookProgressComponent implements OnInit{

  books: Book[];

  constructor (private bookService: BookService){}

  ngOnInit(): void{
    this.getBooks();
  }

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
        this.books = data;
    });
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  searchText = '';

}
