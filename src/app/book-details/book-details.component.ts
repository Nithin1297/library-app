import { Component } from '@angular/core';
import { Ibook } from '../ibook';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  book!: Ibook;
  msg: string = '';
  constructor(
    private bookDataService: BookDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') || '';

    this.bookDataService
      .getBookByIdP(id)
      .then((data) => {console.log(data),data?.imageUrl,(this.book = data)})
      .catch(() => {
        this.msg = 'Something went wrong 🥲';
      });
  }
}
