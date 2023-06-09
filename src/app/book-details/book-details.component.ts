import { Component , OnInit} from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { map } from 'rxjs';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export class BookDetailsComponent implements OnInit{
  
  id: number;
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService){

  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.book = new Book();     
    this.bookService.getBookById(this.id)


      .subscribe({
        next: (data) => {this.book = data;}
      });

      console.log(this.book)
        
      }

}
