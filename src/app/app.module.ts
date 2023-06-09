import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
import { BookProgressComponent } from './book-progress/book-progress.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookProgressUpdateComponent } from './book-progress-update/book-progress-update.component';
import { BookOrganizationComponent } from './book-organization/book-organization.component';
import { YearCalendarModule } from '@iomechs/angular-year-calendar';
import { BookCommentComponent } from './book-comment/book-comment.component';
import { BookCommentListComponent } from './book-comment-list/book-comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    CreateBookComponent,
    UpdateBookComponent,
    BookDetailsComponent,
    SearchPipe,
    BookProgressComponent,
    BookProgressUpdateComponent,
    BookOrganizationComponent,
    BookCommentComponent,
    BookCommentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    YearCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
