import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

// Import the Comment Model
import { Comment } from "../types/comment";

@Injectable({ providedIn: 'root' })

export class CommentService {

    private commentsUrl = 'api/comments'

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    // inject "Http Client" into the Comment service
    constructor(
        private http: HttpClient
    ) { }

    // GET: gets all comments from the server
    getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]>(this.commentsUrl)
    }

    // SAVE METHODS

    // POST: adds a new comment to the server
    addComment(newComment: Comment): Observable<Comment> {
        return this.http.post<Comment>(this.commentsUrl, newComment, this.httpOptions)
    }

    // DELETE: deletes a comment by id from the server
    deleteComment(id: string): Observable<Comment> {
        const url = `${this.commentsUrl}/${id}`
        return this.http.delete<Comment>(url, this.httpOptions)
    }
}