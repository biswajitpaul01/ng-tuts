import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hooks-child',
    templateUrl: './lifecycle-hooks-child.component.html',
    styleUrls: ['./lifecycle-hooks-child.component.css']
})
export class LifecycleHooksChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() data = "";

    hookString: string = '<ol>';

    ngAfterViewCheckedCount: number = 0;
    ngOnChangesCount: number = 0;
    ngDoCheckCount: number = 0;
    ngAfterContentCheckedCount: number = 0;

    constructor() {
        console.log(`constructor - data is ${this.data}`);
        this.hookString += `<li>constructor - data is ${this.data}</li>`;
    }

    ngOnChanges(): void {
        this.ngOnChangesCount++;
        console.log(`ngOnChanges - data is ${this.data}`);
        this.hookString += `<li>ngOnChanges - data is ${this.data} (${this.ngOnChangesCount})</li>`
    }

    ngOnInit(): void {
        console.log(`ngOnInit  - data is ${this.data}`);
        this.hookString += `<li>ngOnInit  - data is ${this.data}</li>`;
    }

    ngDoCheck(): void {
        this.ngDoCheckCount++;
        console.log('ngDoCheck');
        this.hookString += `<li>ngDoCheck (${this.ngDoCheckCount})</li>`;
    }

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit');
        this.hookString += '<li>ngAfterContentInit</li>';
    }

    ngAfterContentChecked(): void {
        this.ngAfterContentCheckedCount++;
        console.log('ngAfterContentChecked');
        this.hookString += `<li>ngAfterContentChecked (${this.ngAfterContentCheckedCount})</li>`;
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit');
        this.hookString += '<li>ngAfterViewInit</li>';
    }

    ngAfterViewChecked(): void {
        this.ngAfterViewCheckedCount++;
        console.log('ngAfterViewChecked');
        this.hookString += `<li>ngAfterViewChecked (${this.ngAfterViewCheckedCount})</li>`;
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy');
        this.hookString += '<li>ngOnDestroy</li></ol>';
    }

}
