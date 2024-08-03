import { Injectable } from '@angular/core';
import { Ibook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}
  getDataP() : Promise<Ibook[]> {
    return fetch('https://669a42859ba098ed61fef71c.mockapi.io/Library').then(
      (res) => res.json()
    );
  }
}
