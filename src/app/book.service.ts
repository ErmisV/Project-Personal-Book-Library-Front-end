import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new Headers(headerDict), 
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL = "http://localhost:8080/api/v1/books";
  
  constructor(private http: HttpClient) { }

  getBookList() : Observable <Book[]> {                                                                                                                                                                            
    return this.http.get<Book[]>(`${this.baseURL}`);
  }

  createBook(book: Book): Observable <Object>{
    return this.http.post(`${this.baseURL}`, book);
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(`${this.baseURL}/${id}`);
  }

  updateBook(id: number, book: Book): Observable <Object>{
    return this.http.put<Book>(`${this.baseURL}/${id}`, book);
  }
  
  deleteBook(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}


