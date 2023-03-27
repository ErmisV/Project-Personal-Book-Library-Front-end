import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-progress-update',
  templateUrl: './book-progress-update.component.html',
  styleUrls: ['./book-progress-update.component.css']
})
export class BookProgressUpdateComponent implements OnInit{

  id: number;
  book: Book = new Book();

  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id)
    .subscribe({
      next: (data) => {this.book = data},
      error: (err) => console.log(err),
    });
  }

  updateBookProgress() {
    this.bookService.updateBookProgress(this.id, this.book)
    .subscribe({
        next: (data) => {
          console.log(data);
          this.book = new Book();
          this.goToBookProgress();
        },  
        error : (err) => console.log(err),
    });
  }

  onSubmit(){
    if((this.book.bookReads)<=(this.book.bookPages)){
    this.updateBookProgress();
    }
    
  }

  goToBookProgress(){
    this.router.navigate(['/book-progress']);
  }



}
