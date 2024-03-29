import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import the book interface
import { Book } from '../types/book.interface';

// import the message service
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
         tap(() => this.log('fetched books')),
         catchError(this.handleError<Book[]>('getBooks', []))
      );
   }

   // GET: book by id - Will 404 if id is not found
   getBook(id: string | null): Observable<Book> {
      const url = `${this.booksUrl}/${id}`;
      return this.http.get<Book>(url).pipe(
         tap(() => this.log(`fetched book id=${id}`)),
         catchError(this.handleError<Book>(`getBook id=${id}`))
      );
   }

   // GET: books whose name contains search term - SEARCH
   searchBook(term: string): Observable<Book[]> {
      if (!term.trim()) {
         // if no search term, return an empty book arrary
         return of([]);
      }
      return this.http.get<Book[]>(`${this.booksUrl}/?name=${term}`).pipe(
         tap((x) => (x.length ? this.log(`found books matching "${term}"`) : this.log(`no books matching "${term}"`))),
         catchError(this.handleError<Book[]>('search Books', []))
      );
   }

   // GET: book count from database
   getBookCount(): Observable<number> {
      return this.http.get<number>('/api/book-count');
   }

   // GET: recent books added
   getRecentBooks(): Observable<Book[]> {
      return this.http.get<Book[]>('/api/recent-books');
   }

   // GET: user's favorite books
   getUsersFavoriteBooks(): Observable<Book[]> {
      return this.http.get<Book[]>('/api/favorite-books');
   }

   // SAVE METHODS //

   // POST: add a new book to the server
   addBook(newBook: Book | any): Observable<Book> {
      return this.http.post<Book>(this.booksUrl, newBook, this.httpOptions).pipe(
         tap((newBook: Book) => this.log(`added new book with id=${newBook._id}`)),
         catchError(this.handleError<Book>('Add Book'))
      );
   }

   // DELETE: a book by ID from the server
   deleteBook(id: string): Observable<Book> {
      // create the url
      const url = `${this.booksUrl}/${id}`;

      return this.http.delete<Book>(url, this.httpOptions).pipe(
         tap(() => this.log(`deleted book id=${id}`)),
         catchError(this.handleError<Book>('deleteBook'))
      );
   }

   // PUT: update a book by ID on the server
   updateBook(id: string, book: Book | object): Observable<object> {
      // create the url
      const url = `${this.booksUrl}/${id}`;

      return this.http.patch(url, book, this.httpOptions).pipe(
         tap(() => this.log(`updated book id=${id}`)),
         catchError(this.handleError<object>('updateBook'))
      );
   }

   // FIX THIS!
   addBookToFavorites(id: string) {
      console.log('added to favorites');
   }

   // handle Http operation that failed
   // let the app continue

   private handleError<T>(operation = 'operation', result?: T) {
      return (error: Error): Observable<T> => {
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
