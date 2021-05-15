import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyDataServiceService } from 'src/app/core/services/my-data-service.service';

@Component({
    selector: 'app-share-data-using-service',
    templateUrl: './share-data-using-service.component.html',
    styleUrls: ['./share-data-using-service.component.css']
})
export class ShareDataUsingServiceComponent implements OnInit, OnDestroy {

    message: string = "";
    messageSubscription: any;

    constructor(private dataService: MyDataServiceService) { }

    ngOnInit(): void {
        this.messageSubscription = this.dataService.currentMessage.subscribe(message => this.message = message);
    }

    sendNewMessage() {
        this.dataService.changeMessage(this.message);
    }

    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
            console.log("Subscription destroyed from ShareDataUsingServiceComponent");
        }

        console.log("Component destroyed from ShareDataUsingServiceComponent");
    }

}
