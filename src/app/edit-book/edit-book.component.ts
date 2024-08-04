import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Ibook } from '../ibook';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
  ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class EditBookComponent {
  allBooks: Array<Ibook> = [];
  bookForm!: FormGroup;
  bookId: string;
  constructor(
    public bookDataService: BookDataService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
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
    this.bookId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit() {
    console.log('EditBookComponent initialized');
    console.log('Book ID:', this.bookId);
    if (this.bookId) {
      this.bookDataService.getBookByIdP(this.bookId).then((book) => {
        this.bookForm.patchValue(book);
      });
    }
  }
  editBook() {
    if (this.bookForm.valid) {
      
      let book: Ibook = {
        id: this.bookId,
        ...this.bookForm.value,
      };
      this.bookDataService.editBookP(book).then(() => {
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
