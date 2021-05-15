import { Component, OnDestroy } from '@angular/core';
import { MyDataServiceService } from './core/services/my-data-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    title = 'practice';

    message: string = "";

    messageSubscription: any;

    constructor(private dataService: MyDataServiceService) { }

    ngOnInit(): void {
        this.messageSubscription = this.dataService.currentMessage.subscribe(message => this.message = message);
    }

    ngOnDestroy() {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
    }

}
