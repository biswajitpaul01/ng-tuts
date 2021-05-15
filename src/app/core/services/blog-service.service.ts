import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlogServiceService {

    baseUrl: string = "https://jsonplaceholder.typicode.com";

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get(`${this.baseUrl}/posts`).toPromise();
    }

    getPostDetails(postId: number) {
        return this.http.get(`${this.baseUrl}/posts/${postId}`).toPromise();
    }

    handleError(error: any) {
        console.error("Catched error: ", error);
    }

}
