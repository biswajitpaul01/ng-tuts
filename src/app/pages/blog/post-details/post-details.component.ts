import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogServiceService } from 'src/app/core/services/blog-service.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

    postDetails: Observable<Post> = of();

    constructor(
        private route: ActivatedRoute,
        private blogService: BlogServiceService
    ) { }

    ngOnInit(): void {
        // Used to get url paramerter, eg. /posts/:id
        let postId = <any> this.route.snapshot.paramMap.get("id");

        // Used to get url appended parameter, eg. ?author=John&price=10
        let author = this.route.snapshot.queryParamMap.get("author");

        if (postId) {
            this.postDetails = this.blogService.getPostDetails(postId);
        }
    }

}
