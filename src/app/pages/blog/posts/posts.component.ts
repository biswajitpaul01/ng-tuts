import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogServiceService } from 'src/app/core/services/blog-service.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts: Observable<Post[]> = of([]);

    constructor(
        private blogService: BlogServiceService
    ) {

    }

    ngOnInit(): void {
        // this.posts = this.blogService.getPosts().then(data => this.posts = data).catch(error => console.error(error));
        this.posts = this.blogService.getPosts();
    }



}
