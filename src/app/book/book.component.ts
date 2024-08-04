import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { BookDataService } from '../book-data.service';
import { Ibook } from '../ibook';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  constructor(private router: Router) {}
  openBookOverview() {
    this.router.navigate(['/details', this.book.id]);
  }
  @Input() id!: string;
  @Output() deleteBookEvent: EventEmitter<Ibook> = new EventEmitter<Ibook>();
  deleteBook() {
    this.deleteBookEvent.emit(this.book);
  }
  // @Input() id!: number;
  @Input() book = {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    publicationDate: '1960-07-11',
    status: 'Have Read',
    imageUrl: 'https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg',
  };
}
