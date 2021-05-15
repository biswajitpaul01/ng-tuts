import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from 'src/app/core/services/blog-service.service';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

    postDetails: any;

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
            this.blogService.getPostDetails(postId).then(data => this.postDetails = data).catch(err => console.log("Error: ", err));
        }
    }

}
