# Routes in Detail

## Template Syntax

When we try to navigate to another component/page, we use routerLink.

_Example 1:_ Here the value in `routerLink` is always string, not an expression. 

~~~html
<a routerLink="/movies" >Movies</a>
~~~

_Example 2:_ If we want to use dynamic data like `/movies/1`, we use binding syntax `[]`

~~~html
<a [routerLink]="['/movies', movie.id]">Kong vs. Godzilla</a>
~~~

_Example 3:_ If we want to use query parameters, we use `queryParams`.

~~~html
<a routerLink="/movies" [queryParams]="{sort: 'name'}">Sort by name</a>
~~~


## Read the query from the url

_Example 1:_ Retrieving the id from URL

~~~ts
import { ActivatedRoute } from '@angular/route';

constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.id = +params.get('id');
    });
}
~~~

_Example 2:_ Retrieving the id from URL

~~~ts
import { ActivatedRoute } from '@angular/route';

constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
}
~~~

## Read the query parameters from the url

_Example 1:_ Retrieving Query Parameters

~~~ts
import { ActivatedRoute } from '@angular/route';

constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
        this.id = +queryParams.get('id');
    });
}
~~~

_Example 2:_ Retrieving Query Parameters

~~~ts
import { ActivatedRoute } from '@angular/route';

constructor(private route: ActivatedRoute) {  }

ngOnInit() {
    this.id = +this.route.snapshot.queryParamMap.get('id');
}
~~~

## Navigate from component

~~~ts
import { Router } from '@angular/route';

constructor(private router: Router) {  }

goToCheckout() {
    // Go to https://domain.com/checkout
    this.router.navigate(['/checkout']);

    // Go to https://domain.com/checkout/user
    this.router.navigate(['/checkout', 'user']);

    // Go to https://domain.com/checkout/?page=account
    this.router.navigate(['/checkout'], {queryParams: {page: 'account'}});
}
~~~
