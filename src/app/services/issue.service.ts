import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// import the issue interface
import { Issue } from "../types/issue.interface";

@Injectable({ providedIn: 'root' })

export class IssueService {

    private issuesUrl = 'api/issues'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // inject "Http Client" into the issue service
    constructor(
        private http: HttpClient
    ) { }

    // GET: gets all issues from the server
    getIssues(): Observable<Issue[]> {
        return this.http.get<Issue[]>(this.issuesUrl)
    }

    // SAVE METHODS

    // POST: adds a new issue to the server
    addIssue(newIssue: Issue | null): Observable<Issue> {
        return this.http.post<Issue>(this.issuesUrl, newIssue, this.httpOptions)
    }

    // DELETE: deletes a issue by id from the server
    deleteIssue(id: string): Observable<Issue> {
        const url = `${this.issuesUrl}/${id}`
        return this.http.delete<Issue>(url, this.httpOptions)
    }
}
