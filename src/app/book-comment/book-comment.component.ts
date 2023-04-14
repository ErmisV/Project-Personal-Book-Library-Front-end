import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-book-comment',
  templateUrl: './book-comment.component.html',
  styleUrls: ['./book-comment.component.css']
})
export class BookCommentComponent implements OnInit{

  id: number;
  bookName: string;
  books: Book[];
  
  constructor(private bookService: BookService,
    private router: Router) {}
    
  ngOnInit(): void {
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

  gotoComments(id:number){
    this.router.navigate(['book-comment-list', id]); 
  }

}
