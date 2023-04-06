import { Component, OnInit} from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-book-progress',
  templateUrl: './book-progress.component.html',
  styleUrls: ['./book-progress.component.css']
})
export class BookProgressComponent implements OnInit{

  books: Book[];
  bookTotal: Book;
  rating: string;
  rat:string;
  show:boolean=false;
  showRealProg:number;
  
  constructor (private bookService: BookService,
    private router: Router){}

  ngOnInit(): void {
    this.getBooks();

  }

  private getBooks(){
    this.bookService.getBookList().subscribe(data => {
        this.books = data;
        
    });
  }

  buttonShow(id:number){
    this.show=false;
    this.bookProgress(id);
  }

  conditionShow(id:number){
      return this.show=true;
  }

  bookProgress(id: number){
      console.log(this.show)
      this.bookService.getBookById(id)
      .subscribe({
        next:(data) => {
          this.bookTotal = data;

          this.rat=this.getRating(this.bookTotal.bookProgress)
          this.showRealProg=this.bookTotal.bookProgress;
          console.log(this.rat)

          this.conditionShow(id)

          console.log(this.show)
        }
      });
      console.log(this.show)
  }
  
  searchText = '';

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }


  updateBookProgress(id: number){
    this.router.navigate(['book-progress-update', id]);  
  }

  getRating(prog: number): string {

    if (prog===100){
          this.rating="final";
    }else if((prog>=80)&&(prog<100)){
          this.rating="upper warm";
    }else if((prog>60)&&(prog<80)){
          this.rating="upper cold";
    }else if((prog>=40)&&(prog<=60)){
          this.rating="mid";
    }else if((prog>20)&&(prog<40)){
          this.rating="low warm";
    }else if((prog>0)&&(prog<=20)){
          this.rating="low cold";
    }else{
          this.rating="none";
    }
    
    return this.rating

  }
   
  goToUpdateShow(id: number){
    this.router.navigate(['book-progress-update-show', id]);  
  }

}

