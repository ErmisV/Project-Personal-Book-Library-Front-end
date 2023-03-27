import { Component , OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit{

  book: Book = new Book();

  constructor(private bookService: BookService,
    private router: Router) {}

  ngOnInit(): void {
  }
  
  saveBook(){
    this.book.bookReads = 0;
    this.bookService.createBook(this.book)
    .subscribe({
      next: (data) => {
          console.log(data);
          this.goToBookList();
        }, 
        error: (err) =>  console.log(err),
      });
  }
  
  goToBookList(){
    this.router.navigate(['/books']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }
  
}



