import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'create-book', component: CreateBookComponent},
  {path: 'update-book/:id', component: UpdateBookComponent},
  {path: '', redirectTo: 'books' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
