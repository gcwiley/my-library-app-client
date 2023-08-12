import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// import the message service
import { MessageService } from './message.service';

// import the issue interface
import { Issue } from '../types/issue.interface';

@Injectable({ providedIn: 'root' })
export class IssueService {
  private issuesUrl = 'api/issues'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // inject "HttpClient" into the issue service
  constructor(private http: HttpClient, private messageService: MessageService) {}

  // GET: all issues from the server
  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issuesUrl).pipe(
      tap(() => this.log('fetched issues')),
      catchError(this.handleError<Issue[]>('getIssues', []))
    );
  }

  // GET: a issue by ID. Will 404 if id not found
  getIssue(id: string | null): Observable<Issue> {
    const url = `${this.issuesUrl}/${id}`;
    return this.http.get<Issue>(url).pipe(
      tap(() => this.log(`fetched issue id=${id}`)),
      catchError(this.handleError<Issue>(`getIssue id=${id}`))
    );
  }

  // GET issue whose name contains search term - SEARCH
  searchIssues(term: string): Observable<Issue[]> {
    if (!term.trim()) {
      // if no search term, return an empty issue arrary
      return of([]);
    }
    return this.http.get<Issue[]>(`${this.issuesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found issues matching "${term}"`)
          : this.log(`no issues matching "${term}"`)
      ),
      catchError(this.handleError<Issue[]>('searchIssues', []))
    );
  }

  // GET: issue count from database
  getIssueCount(): Observable<number> {
    return this.http.get<number>('/api/issue-count');
  }

  // GET: recent issues added
  getRecentIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('/api/recent-issues');
  }

  // SAVE METHODS //

  // POST: add a new issue to the server
  addIssue(newIssue: Issue | null): Observable<Issue> {
    return this.http.post<Issue>(this.issuesUrl, newIssue, this.httpOptions).pipe(
      tap((newIssue: Issue) => this.log(`added issue with id=${newIssue._id}`)),
      catchError(this.handleError<Issue>('addHero'))
    );
  }

  // DELETE an issue by ID from the server
  deleteIssue(id: string): Observable<Issue> {
    const url = `${this.issuesUrl}/${id}`;

    return this.http.delete<Issue>(url, this.httpOptions).pipe(
      tap(() => this.log(`deleted issue id=${id}`)),
      catchError(this.handleError<Issue>('deleteIssue'))
    );
  }

  // PUT: update the issue in the database
  updateIssue(issue: Issue | any): Observable<any> {
    return this.http.put(this.issuesUrl, issue, this.httpOptions).pipe(
      tap(() => this.log(`updated issue id=${issue._id}`)),
      catchError(this.handleError<Issue>('updateIssue'))
    );
  }

  // Handle Http operation that failed
  // let the app continue
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // let the app keep running by return an empty result
      return of(result as T);
    };
  }

  // Log a issue Service message with issue Service
  private log(message: string): void {
    return this.messageService.add(`IssueService: ${message}`);
  }
}
