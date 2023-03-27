import { Component, OnInit} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{

  books: Book [];
  
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

  //Search Function
  searchText = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  
  //Search Function Ends

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

}
