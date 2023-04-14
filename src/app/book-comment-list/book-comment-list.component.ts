import { Component, OnInit } from '@angular/core';
import { BookComment } from '../bookcomment';
import { BookCommentService } from '../bookcomment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-comment-list',
  templateUrl: './book-comment-list.component.html',
  styleUrls: ['./book-comment-list.component.css']
})
export class BookCommentListComponent implements OnInit{

  id:number
  bookComments: BookComment [];

  constructor (private bookCommentService: BookCommentService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookCommentService.getCommentsByBookId(this.id)
    .subscribe({
      next: (data) => {this.bookComments = data;}
    });
  
  }

}
