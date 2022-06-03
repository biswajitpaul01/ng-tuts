import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable, of } from "rxjs";
import { BlogServiceService } from "src/app/core/services/blog-service.service";
import { Post } from "src/app/shared/models/post.model";

@Component({
    selector: 'blog-item-list',
    templateUrl: './blog-item-list.component.html',
    styleUrls: ['./blog-item-list.component.scss']
})
export class BlogItemListComponent implements OnInit {

    posts: Observable<Post[]> = of([]);

    constructor(
        private blogService: BlogServiceService
    ) {

    }

    ngOnInit(): void {
        this.posts = this.blogService.getPosts();
    }
}
