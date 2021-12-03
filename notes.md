# Useful Notes

## Data Binding:
    Data binding is used to do communucation between component and DOM
    1. One way binding (Interpolation, Attrubute, Property, Class, Style)
    2. Two way binding [(ngModel)]
    3. Event binding (click, submit)

## Directives
    Directive is used to add behavior to an existing DOM element. Directives is basically a class with the (@) decorator and used for class metadata in typescript.
    1. Component Directive: These are directives with a template.
    2. Structural Directive: It is used to manipulate the DOM by adding or removing HTML elements at a time
        1. NgIf
        2. NgSwitch
            - NgSwitch
            - *NgSwitchCase
            - *NgSwitchDefault
        3. NgFor
    3. Attribute Directive: It is used to change the behaviour or the appearance of different elements, and these elements act as an attribute for the DOM elements.
        1. NgStyle: adds and removes a set of HTML styles
        2. NgClass: adds and removes a set of CSS classes
        3. NgModel: adds two-way data binding to an HTML form element.

## Lifecycle Hooks
    constructor
    1. ngOnChanges: This is the first method to be called when any input-bound property will be set and always respond before ngOnInit() whenever the value of the input-bound properties are changed.
    2. ngOnInit: It will initialize the component or a directive and set the value of component's different input properties. And one important point is that this method called once after ngOnChanges ().
    3. ngDoCheck: This method normally triggered when any change detection happens after two methods ngOnInit() and ngOnChanges().
    4. ngAfterContentInit: This method will be triggered whenever component's content will be initialized and called once after the first run through of initializing content.
    5. ngAfterContentChecked: Called after every ngDoCheck() and respond after the content will be projected into our component.
    6. ngAfterViewInit: Called when view and child views are initialized and called once after view initialization.
    7. ngAfterViewChecked: Called after all of the content is initialized, it does not matter either there are changes or not but still this method will be invoked.
    8. ngOnDestroy: Called just before destroys of a component or directive and we need to unsubscribe any pending subscription which can harm us as extreme memory leaks.

## Sharing data between Angular Components
    1. @Input() decorator: share data from Parent component to child. @Input() is a decorator which accepts the input from the parent component and display the value into the child component template
        @Input() parentCounter: number = 0;

    2. @Output decorator and EventEmitter: share data from child to parent component by emitting the event which can listen by the parent component. @Output is a decorator which becomes the output for the parent component and in order to get the message from the child, we can use EventEmitter.
        // [In Child]
        // .ts file
        @Output() childMessage = new EventEmitter();

        passDataToParent() {
            this.childMessage.emit({
                name: this.names[Math.floor(Math.random() * 6)]
            });
        }

        // [In parent]
        // .html file
        <app-share-data-first-child [parentCounter]="countIndex" (childMessage)="setChildMessage($event)"></app-share-data-first-child>

        // .ts file
        setChildMessage(data: any) {
            this.childMessageName = data.name;
        }

    3. @ViewChild: share the data from child to parent component. @ViewChild is used to inject the one component into another component using @ViewChild() decorator. We can access elements in the view directly by #<name>.
        1. Type 1
        @ViewChild(ShareDataFirstChildComponent, {static: false}) sc: any;
        In Angular 8, the static flag is required for ViewChild. Whereas in Angular9, you no longer need to pass this property. Once you updated to Angular9 using ng update, the migration will remove { static: false } script everywhere.
        2. Type 2
        <input #uname>
        @ViewChild('uname') input;

        ngAfterViewInit() {
            console.log(this.input.nativeElement.value);
        }
    4. Services: share data amongst different components.

## Difference between observable and promise

| Observables  |  Promises |   
|---|---|   
| Emit multiple values over a period of time.  |  Emit a single value at a time. |   
| Are lazy: they're not executed until we subscribe to them using the subscribe() method.  | Are not lazy: execute immediately after creation.  |   
| Have subscriptions that are cancellable using the unsubscribe() method, which stops the listener from receiving further values. | Are not cancellable.  |   
| Provide the map for forEach, filter, reduce, retry, and retryWhen operators.  | Don’t provide any operations.  |   
| Deliver errors to the subscribers.  | Push errors to the child promises.  |   

## What is the purpose of async pipe?
The Async Pipe subscribes to an observable or promise and returns the latest value it has emitted. When a new value is emitted, the pipe marks the component to be checked for changes.

## ChangeDetectionStrategy
    1. Default: By default, Angular makes no assumption on what the component depends upon. So it has to be conservative and will checks every time something may have changed, this is called dirty checking. In a more concrete way, it will perform checks for each browser events, timers, XHRs and promises.
    This can be problematic when you’re starting to have a big application with many components, specially if you’re focused on performance.
    2. OnPush: When using the onPush strategy on the component, you basically say to Angular that it should not make any guess on when it needs to perform the check for change. It will rely only on the change of the Input references, some events triggered by itself (the component) or one of its children. Lastly, you, the developer, can ask explicitly Angular to do it with the componentRef.markForCheck() method.
    With onPush, the component only depends on its inputs and embraces the immutability, the change detection strategy will kicks in when:
    The Input reference changes;
    - An event originated from the component or one of its children;
    - Run change detection explicitly (componentRef.markForCheck());
    - Use the async pipe in the view.

## Modules
    1. Routing module
    2. Service module
    3. Features module
    4. Widget module
    5. Shared module

@NgModule contains the various metadata options like:   
    1. declarations: The declarations option is used to define components in the respective module   
    2. imports: The imports option is used to import other dependent modules. The BrowserModule is required by default for any web based angular application   
    3. exports: When you want to share component outside of a module in another component   
    4. providers: The providers option is used to configure set of injectable objects that are available in the injector of this module.   
    5. bootstrap: The bootstrap option tells Angular which Component to bootstrap in the application   
    6. entryComponents: The entryComponents option is a set of components dynamically loaded into the view.   

## Feature Modules
    1. Domain feature modules
    2. Routed feature modules
    3. Routing modules
    4. Widget feature modules
    5. Service feature modules

## Entry Component
    The bootstrapped component is an entry component which loads the DOM during the bootstrapping process. In other words, we can say that entry components are the one, which we are not referencing by type, thus it will be included during the bootstrapping mechanism.

## Providers
    Providers are classes that create and manage service objects the first time that Angular needs to resolve a dependency. Providers is used to register the classes to an angular module as a service.And then, this service classes can be used by other components during the itself creation phase in the module. 
    Providers are used to injecting the token to a dependency via constructor of the component, directives and other classes as well.

## Pipes
    The pipe is a decorator and it is used to transform the value within the template. It is just a simple class with @Pipe decorator with the class definition and it should implement the PipeTransform interface which accepts the input value and it will return the transformed value.
    1. Pure pipes
        By default, in Angular, pipes are pure, and every pipe created in the angular are pure by nature.
    2. Impure pipes
        We can also create impure pipe by providing pure to false.

## Built-In Pipes
    1. Date pipes
    2. Currency pipes
    3. Uppercase pipes
    4. Lowercase pipes
    5. Titlecase pipes
    6. Async pipes
    7. Slice pipes
    8. Decimal pipes
    9. Json pipes

## Route
    1. Path: String value which represents route, matcher
    2. pathMatch: Matches the path against the path strategy
    3. Component: The component name which is used to indicate the component type
    4. Matcher: To configure custom path matching
    5. Children: Children are the array of different child routes
    6. loadChildren: Load children are used to loading the child routes as lazily loaded routes
    7. data:
    8. canActivate:
    9. resolve:
    10. canLoad:
    11. canActivateChild:
    12. canDeactivate:

## Methods in RouterModule
    1. forRoot(): It performs initial navigation and contains the list of configured router providers and directives.
    2. forChild(): forChild is used to create the module with all of the router directive and provider registered routes.

## RouterLink
    RouterLink in Angular is a Directive and used to transfer the route from one component to another by identifying the route value which is configured in the router module.
    1. routerLink

    2. queryParams
        // Navigate to /results?page=1
        this.router.navigate(['/results'], { queryParams: { page: 1 } });

    3. fragment: Sets the hash fragment for the URL
        // Navigate to /results#top
        this.router.navigate(['/results'], { fragment: 'top' });

    4. preserveFragment: When true, preserves the URL fragment for the next navigation
        // Preserve fragment from /results#top to /view#top
        this.router.navigate(['/view'], { preserveFragment: true });

    5. replaceUrl

    6. preserveQueryParams

    7. urlTree

    8. skipLocationChange

    9. queryParamsHandling

## Router events
    When the navigation process started, at that time different event will be triggered at a specific point of time using the property Router.events
    1. NavigationStart
    2. RouteConfigLoadStart
    3. RouteConfigLoadEnd
    4. RoutesRecognized
    5. GuardsCheckStart
    6. ChildActivationStart
    7. ActivationStart
    8. GuardsCheckEnd
    9. ResolveStart
    10. ResolveEnd
    11. ChildActivationEnd
    12. ActivationEnd
    13. NavigationEnd
    14. NavigationCancel
    15. NavigationError
    16. Scroll

## RouterOutlet
    RouterOutlet is a directive provided by Angular which is used to load the different components based on the router state.
    <router-outlet></router-outlet>

## RouterLinkActive
    RouterLinkActive in Angular is used to provide a CSS class whenever any link will be clicked by the user and using this attribute, we can change styles of that link.

## Routing Strategies
    1. Path Location Strategy: By default, in Angular, Path location strategy is used to implement routing using HTML 5 pushState API.
    2. Hash Location Strategy: To enable Hash-based routing, we need to use Hash location strategy when Hash (#) will be appended to the URL. While implementing hash-based routing strategy, we need to pass Boolean useHash to true.

## Route loading
    1. Pre-Loading: Feature Modules under Pre-Loading would be loaded automatically after the application starts.
    2. Eager Loading: Feature modules under Eager Loading would be loaded before the application starts. This is the default module-loading strategy.
    3. Lazy Loading: Feature modules under Lazy Loading would be loaded on demand after the application starts. It helps to start application faster.

## Angular Form
    1. Reactive Forms
        The difference between resetForm and reset is that the former will clear the form fields as well as any validation, while the later will only clear the fields. Use resetForm after the form is validated and submitted, otherwise use reset.
    2. Template-driven Forms

## Compilation Types in Angular
    1. Just-in-Time (JIT): Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands.
    ng build
    ng serve

    2. Ahead-of-Time (AOT): The Angular ahead-of-time (AOT) compiler converts your Angular HTML and TypeScript code into efficient JavaScript code during the build phase before the browser downloads and runs that code. Compiling your application during the build process provides a faster rendering in the browser.
    Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the --aot option with the ng build or ng serve command as below
    ng build --aot
    ng serve --aot
__Note:__ The ng build command with the --prod meta-flag (`ng build --prod`) compiles with AOT by default.

## Advantages with AOT
    1. Faster rendering: The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
    2. Fewer asynchronous requests: It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
    3. Smaller Angular framework download size: Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
    4. Detect template errors earlier: Detects and reports template binding errors during the build step itself
    5. Better security: It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.

## Subject vs BehvaiorSubject

|   | Subject  |  BehaviorSubject |
|---|---|---|
| Holding Values  |  If you subscribe to an subject, you won’t get the current value or initial value. | But when you subscribe to an Behavior Subject, you will be able to get the current value or the initial value.  |
| Defining Values  | You don’t have to define a default value whenever you declare the subject.  | But you have to define a default value whenever you declare Behavior Subject based upon the data type.  |
|  Subscribers | In Subject, each next subscribers receive only the upcoming values.  | In Behavior Subject, each next subscribers receive one previous value and upcoming values.  |
|  Observable | Observable is a Generic, and Behavior Subject is technically a sub–type of Observable because BehaviorSubject is an observable with specific qualities.   |  And when it comes to Subject and Observable is that a Subject has state, it keeps a list of observers. On the other hand, an observable is just a function that sets up observation. |
|  Reusablity | Both Subject and BehaviorSubject cannot be reused once you unsubscribe the respective Subject.  | Both Subject and BehaviorSubject cannot be reused once you unsubscribe the respective Subject.  |

Read more: https://devsuhas.com/2019/12/09/difference-between-subject-and-behaviour-subject-in-rxjs/
