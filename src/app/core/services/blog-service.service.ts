import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Post } from 'src/app/shared/models/post.model';

@Injectable({
    providedIn: 'root'
})
export class BlogServiceService {

    baseUrl: string = "https://jsonplaceholder.typicode.com";

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.baseUrl}/posts`).pipe(shareReplay());
    }

    getPostDetails(postId: number): Observable<Post> {
        return this.http.get<Post>(`${this.baseUrl}/posts/${postId}`).pipe(shareReplay());
    }

    handleError(error: any) {
        console.error("Catched error: ", error);
    }

}

