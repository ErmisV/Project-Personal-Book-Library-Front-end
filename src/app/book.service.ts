import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book} from './book';
import { map, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL = "http://localhost:8080/api/v1/books";
  va: number;

  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable <Object>{
    return this.http.post(`${this.baseURL}`, book);
  }

  getBookList() : Observable <Book[]> {                                                                                                                                                                            
    return this.http.get<Book[]>(`${this.baseURL}`);
  }

  getBookById(id: number): Observable <Book>{
    return this.http.get<Book>(`${this.baseURL}/${id}`);
  }

  //Weird Methods

  getBookReadsById(id: number) {
    return this.http.get<Book>(`${this.baseURL}/${id}`)
  }
  
  /*
  getPagesTotal():number {
    return this.va
  }
  */


  //
  updateBook(id: number, book: Book): Observable <Object>{
    return this.http.put<Book>(`${this.baseURL}/${id}`, book);
  }
  
  updateBookProgress(id: number, book: Book): Observable <Object>{
    return this.http.put<Book>(`${this.baseURL}/${id}`, book);
  }

  deleteBook(id: number): Observable <Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}


