import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/core/services/blog-service.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    posts:any = [];

    constructor(
        private blogService: BlogServiceService
    ) { }

    ngOnInit(): void {
        this.posts = this.blogService.getPosts().then(data => this.posts = data).catch(error => console.error(error));
    }



}
