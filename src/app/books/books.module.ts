import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { BooksRoutes } from './books.routing';
import { BooksOverviewComponent } from './container/books-overview/books-overview.component';
import { CreateBookComponent } from './container/create-book/create-book.component';
import { BookListComponent } from './presentational/book-list/book-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(BooksRoutes),
  ],
  exports: [],
  declarations: [
    BooksOverviewComponent,
    CreateBookComponent,
    BookListComponent,
  ],
  providers: [],
})
export class BooksModule {}
