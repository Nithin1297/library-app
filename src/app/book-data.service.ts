import { Injectable } from '@angular/core';
import { Ibook } from './ibook';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}
  getDataP(): Promise<Ibook[]> {
    return fetch('https://669a42859ba098ed61fef71c.mockapi.io/Library').then(
      (res) => res.json()
    );
  }
  addBookP(newBook: Ibook) {
    return fetch(`https://669a42859ba098ed61fef71c.mockapi.io/Library`, {
      method: 'POST',
      body: JSON.stringify(newBook),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  }
  deleteBookP(book: Ibook) {
    return fetch(
      `https://669a42859ba098ed61fef71c.mockapi.io/Library/${book.id}`,
      { method: 'DELETE' }
    ).then((res) => res.json());
  }
  getBookByIdP(bookId: string): Promise<Ibook> {
    return fetch(
      `https://669a42859ba098ed61fef71c.mockapi.io/Library/${bookId}`
    ).then((res) => res.json());
  }

  editBookP(book: Ibook) {
    return fetch(
      `https://669a42859ba098ed61fef71c.mockapi.io/Library/${book.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then((res) => res.json());
  }
}
