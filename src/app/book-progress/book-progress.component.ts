import { Component, OnInit} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-book-progress',
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.css']
})
export class BookProgressComponent implements OnInit{

  id: number;
  books: Book[];
  bookTotal: Book;
  
  
  constructor (private bookService: BookService,
    private router: Router){}

  ngOnInit(): void {
    this.getBooks();

  }

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
        this.books = data;
    });
  }

  bookProgress(id:number){
    
    
    this.bookService.getBookById(id)
    .subscribe((data: Book) => {
      this.bookTotal = data;
      console.log(this.bookTotal.bookPages);
      console.log(this.bookTotal.bookReads);
      console.log(this.bookTotal.bookProgress);
      
      });
      
  }

  //Search Function
  searchText = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  //Search Function Ends 

  updateBookProgress(id: number){
    this.router.navigate(['book-progress-update', id]);  
  }

   
  goToUpdateShow(id: number){
    this.router.navigate(['book-progress-update-show', id]);  
  }

}

/*
this.bookService.getBookById(this.id)
      .pipe(map(res => ({
        bookPages: res.bookPages,
        bookReads: res.bookReads
      })))
      .subscribe(well => console.log(well))
      
      
      .subscribe({
        next: (bookPages) => {res.bookPages = bookPages}
      });
      

*/