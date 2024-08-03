import { Component } from '@angular/core';
import { BookComponent } from "../book/book.component";
import { BookDataService } from '../book-data.service';
import { Ibook } from '../ibook';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  allBooks : Array<Ibook> = [];
  isLoading: boolean = true;
  msg = '';
constructor(private bookdataService : BookDataService){}

ngOnInit() {
  this.loadBooks();
}

loadBooks() {
  this.bookdataService
    .getDataP()
    .then((data) => {
      console.log(data);
      this.allBooks = data;
      this.isLoading = false;
    })
    .catch(() => {
      this.isLoading = false;
      this.msg = 'Something went wrong 🥲';
    });
}
trackById(index: number, book: Ibook): number {
  return book.id;
}
}
