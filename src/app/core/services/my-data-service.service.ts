import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MyDataServiceService {

    private source = new BehaviorSubject('Message from My Data Service Class');
    currentMessage = this.source.asObservable();

    constructor() { }

    changeMessage(msg: string) {
        this.source.next(msg);
    }

}
