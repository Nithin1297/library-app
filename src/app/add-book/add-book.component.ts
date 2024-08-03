import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { Ibook } from '../ibook';
import { BookDataService } from '../book-data.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChangeDetectionStrategy } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class AddBookComponent {
  allBooks: Array<Ibook> = [];
  bookForm!: FormGroup;
  constructor(
    public bookDataService: BookDataService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      imageUrl: [
        '',
        [Validators.required, Validators.pattern(/^https:\/\/.*/)],
      ],
      status: ['', [Validators.required]],
      category: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]],
    });
  }

  addBook() {
    if (this.bookForm.valid) {
      let newBook: Ibook = this.bookForm.value;
      // newBook.publicationDate = newBook.publicationDate.slice(0, 10);


      this.bookDataService.addBookP(newBook).then(() => {
        this.router.navigate(['']);
      });
    }
  }

  get title() {
    return this.bookForm.get('title');
  }
  get author() {
    return this.bookForm.get('author');
  }
  get imageUrl() {
    return this.bookForm.get('imageUrl');
  }
  get category() {
    return this.bookForm.get('category');
  }
  get publicationDate() {
    return this.bookForm.get('publicationDate');
  }
  get status() {
    return this.bookForm.get('status');
  }
}
