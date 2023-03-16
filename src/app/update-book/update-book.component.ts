import { Component , OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit{
  
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

  updateBook() {
    this.bookService.updateBook(this.id, this.book)
    .subscribe({
      next: (data) => {
      console.log(data);
      this.book = new Book();
      this.goToBookList();
    }, error : (err) => console.log(err),
  });

}
  

  onSubmit(){
    this.updateBook();
  }
  goToBookList(){
    this.router.navigate(['/books']);
  }
}


