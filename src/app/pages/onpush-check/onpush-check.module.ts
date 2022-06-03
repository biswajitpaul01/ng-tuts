import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BlogItemDetailsComponent } from "./blog-item-details/blog-item-details.component";
import { BlogItemListComponent } from "./blog-item-list/blog-item-list.component";
import { OnpushCheckRoutingModule } from "./onpush-check-routing.module";
import { OnpushCheckComponent } from "./onpush-check.component";

@NgModule({
    declarations: [
        OnpushCheckComponent,
        BlogItemListComponent,
        BlogItemDetailsComponent
    ],
    imports: [
        CommonModule,
        OnpushCheckRoutingModule
    ]
})
export class OnpushCheckModule {

}
