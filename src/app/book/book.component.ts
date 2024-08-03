import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BookDataService } from '../book-data.service';
import { Ibook } from '../ibook';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book = {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    category: 'Fiction',
    publicationDate: '1960-07-11',
    status: 'Have Read',
    imageUrl:
      'https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg',
  };
}
