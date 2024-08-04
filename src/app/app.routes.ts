import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent },
      { path: 'addBook', component: AddBookComponent },
    ],
},
{ path: 'edit/:id', component: EditBookComponent },
];
