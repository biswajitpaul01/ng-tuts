import { Component } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { BlogServiceService } from "src/app/core/services/blog-service.service";
import { Post } from "src/app/shared/models/post.model";

@Component({
    selector: 'blog-item-details',
    templateUrl: './blog-item-details.component.html',
    styleUrls: ['./blog-item-details.component.scss']
})
export class BlogItemDetailsComponent {

    postDetails: Observable<Post> = of();

    constructor(
        private blogService: BlogServiceService,
        private route: ActivatedRoute
    ) {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('id') || 1;
            this.postDetails = this.blogService.getPostDetails(id as number);
        })
    }
}
