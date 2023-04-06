import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookProgressUpdateComponent } from './book-progress-update/book-progress-update.component';
import { BookProgressComponent } from './book-progress/book-progress.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { BookOrganizationComponent } from './book-organization/book-organization.component';

const routes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'create-book', component: CreateBookComponent},
  {path: 'update-book/:id', component: UpdateBookComponent},
  {path: 'book-details/:id', component: BookDetailsComponent},
  {path: 'book-progress', component:BookProgressComponent},
  {path: 'book-progress-update/:id', component:BookProgressUpdateComponent},
  {path: 'book-organization', component:BookOrganizationComponent},
  {path: '', redirectTo: 'books' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
