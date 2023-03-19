import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book[];
  
  constructor (private bookService: BookService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getBooks();
  }

  //Search Function
  searchText = '';

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
        this.books = data;
    });
  }

  updateBook(id: number){
    this.router.navigate(['update-book', id]);  
  }

  deleteBook(id: number){
    this.bookService.deleteBook(id)
    .subscribe({
        next: (data) => {
          console.log(data);
          this.getBooks();
        }
    })
  }

  detailsBook(id: number){
    this.router.navigate(['book-details', id]);  
    }



  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  


}
