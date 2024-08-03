import { Injectable } from '@angular/core';
import { Ibook } from './ibook';

// export type Ibook = {
//   id: number;
//   title: string;
//   author: string;
//   category: string;
//   publicationDate: string;
//   status: string;
// }

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}
  getDataP(): any {
    fetch('https://669a42859ba098ed61fef71c.mockapi.io/Library').then((res) =>
      res.json()
    );
  }
}
