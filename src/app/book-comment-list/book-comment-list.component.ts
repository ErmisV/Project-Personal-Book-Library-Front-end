import { Component, OnInit } from '@angular/core';
import { BookComment } from '../bookcomment';
import { BookCommentService } from '../bookcomment.service';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-comment-list',
  templateUrl: './book-comment-list.component.html',
  styleUrls: ['./book-comment-list.component.css']
})
export class BookCommentListComponent implements OnInit{

  bookId:number;
  bookComment:BookComment = new BookComment();
  bookComments: BookComment [];
  book:Book;

  constructor (private bookCommentService: BookCommentService,
    private bookService: BookService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
      this.bookId = this.route.snapshot.params['id'];
      
      this.bookCommentService.getCommentsByBookId(this.bookId)
        .subscribe({
        next: (data) => {this.bookComments = data;}
      });

      this.bookService.getBookById(this.bookId)
        .subscribe({
        next: (data) => {this.book = data;}
      });
        console.log(this.book)
  }

  createComment(bookId:number){

    this.bookComment.commentBookId=this.bookId;
    this.bookComment.commentBookName=this.book.bookName;
    this.bookCommentService.createComment(this.bookId,this.bookComment)
    .subscribe({
      next: (data) => {
          console.log(data);
        }, 
        error: (err) =>  console.log(err),
      });

  }

  updateComment(commentId:number){
    /*
    this.bookService.updateBookProgress(this.id, this.commentId)
    .subscribe({
      next: (data) => {
        console.log(data);
        this.bookComment = new BookComment();
      },  
      error : (err) => console.log(err),
    }
    */
  }

  deleteComment(commentId:number){
    this.bookCommentService.deleteComment(this.bookId,commentId)
    .subscribe({
        next: (data) => {
          console.log(data);
          this.getComments();
        }
    })
    
  }

  onSubmit(){
    console.log(this.book);
  this.createComment(this.bookId);
  }

  private getComments(){
    this.bookCommentService.getCommentsByBookId(this.bookId).subscribe(data => {
        this.bookComments = data;
    });
  }
}
