import { Component } from '@angular/core';
import { BookComponent } from "../book/book.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
