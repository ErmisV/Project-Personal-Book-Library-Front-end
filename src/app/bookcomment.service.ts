import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookComment } from './bookcomment';

@Injectable({
  providedIn: 'root'
})
export class BookCommentService {

  baseURL = "http://localhost:8080/api/v2/comments";

  constructor(private http: HttpClient) { }

  getCommentList() : Observable <BookComment[]> {                                                                                                                                                                            
    return this.http.get<BookComment[]>(`${this.baseURL}`);
  }

  getCommentsByBookId(id: number): Observable <BookComment[]>{
    return this.http.get<BookComment[]>(`${this.baseURL}/${id}`);
  }
  
  createComment(id:number, comment: BookComment): Observable <Object>{
    return this.http.post(`${this.baseURL}/${id}`, comment);
  }

  updateComment(bookId:number,id:number, bookComment: BookComment):Observable <Object>{
    return this.http.put<BookComment>(`${this.baseURL}/${bookId}/${id}`, bookComment);
  }

  deleteComment(bookId:number, commentId:number):Observable <Object>{
    return this.http.delete(`${this.baseURL}/${bookId}/${commentId}`);
  }
}
