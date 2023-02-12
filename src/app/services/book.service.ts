import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Import the Book Model
import { Book } from '../types/book.interface';

// Import the Message Service
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = '/api/books'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // Inject "HttpClient" in the Book Service
  constructor(private http: HttpClient, private messageService: MessageService) {}

  // GET: all books from the server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      tap((_) => this.log('fetched books')),
      catchError(this.handleError<Book[]>('getBooks', []))
    );
  }

  // GET: book by id - Will 404 if id is not found
  getBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap((_) => this.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  // GET: book count from database
  getBookCount(): Observable<Object> {
    return this.http.get<any>('/api/book-count');
  }

  // GET: recent books added
  getRecentBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/recent-books');
  }

  // SAVE METHODS //

  // POST: add a new book to the server
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, this.httpOptions).pipe(
      tap((newBook: Book) => this.log(`added book with id=${newBook._id}`)),
      catchError(this.handleError<Book>('addBook'))
    );
  }

  // DELETE: book from the server
  deleteBook(id: string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;

    return this.http.delete<Book>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted book id=${id}`)),
      catchError(this.handleError<Book>('deleteBook'))
    );
  }

  // PUT: update the book on the server
  updateBook(id: string, book: Book): Observable<any> {
    const url = `${this.booksUrl}/${id}`;

    return this.http.put(url, book, this.httpOptions).pipe(
      tap((_) => this.log(`updated book id=${book._id}`)),
      catchError(this.handleError<any>('updateBook'))
    );
  }

  // handle Http operation that failed
  // let the app continue

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user comsumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by returning an empty result
      return of(result as T);
    };
  }

  // Log a BookService message with the messageService
  private log(message: string) {
    this.messageService.add(`BookService: ${message}`);
  }
}
