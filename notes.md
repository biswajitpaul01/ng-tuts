# Useful Notes

## Data Binding:
    Data binding is used to do communucation between component and DOM
    1. One way binding (Interpolation, Attrubute, Property, Class, Style)
    2. Two way binding [(ngModel)]
    3. Event binding (click, submit)

## Directives
    Directives is basically a class with the (@) decorator and used for class metadata in typescript.
    1. Component Directive:
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
    2. @Output decorator and EventEmitter: share data from child to parent component by emitting the event which can listen by the parent component. @Output is a decorator which becomes the output for the parent component and in order to get the message from the child, we can use EventEmitter.
    3. @ViewChild: share the data from child to parent component. @ViewChild is used to inject the one component into another component using @ViewChild() decorator. We can access elements in the view directly by #<name>.
    4. Services: share data amongst different components.

## ChangeDetectionStrategy
    1. Default
    2. OnPush

## Modules
    1. Routing module
    2. Service module
    3. Features module
    4. Widget module
    5. Shared module

@NgModule contains the various metadata options like:
    1. declarations
    2. imports
    3. exports
    4. providers
    5. bootstrap

## Feature Modules
    1. Domain feature modules
    2. Routed feature modules
    3. Routing modules
    4. Widget feature modules
    5. Service feature modules

## Entry Component
    The bootstrapped component is an entry component which loads the DOM during the bootstrapping process. In other words, we can say that entry components are the one, which we are not referencing by type, thus it will be included during the bootstrapping mechanism.

## Providers
    Providers are used to injecting the token to a dependency via constructor of the component, directives and other classes as well.

## Pipes
    The pipe is a decorator and it is used to transform the value within the template. It is just a simple class with @Pipe decorator with the class definition and it should implement the PipeTransform interface which accepts the input value and it will return the transformed value.
    1. Pure pipes
        By default, in Angular, pipes are pure, and every pipe created in the angular are pure by nature.
    2. Impure pipes
        We can also create impure pipe by providing pure to false as describe below.

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
    3. fragment
    4. preserveFragment
    5. replaceUrl
    6. preserveQueryParams
    7. urlTree
    8. skipLocationChange
    9. queryParamsHandling

## Router events
    When the navigation process started, at that time different event will be trigger at a specific point of time using the property Router.events
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

## RouterLinkActive
    RouterLinkActive in Angular is used to provide a CSS class whenever any link will be clicked by the user and using this attribute, we can change styles of that link.

## Routing Strategies
    1. Path Location Strategy: By default, in Angular, Path location strategy is used to implement routing using HTML 5 pushState API.
    2. Hash Location Strategy: To enable Hash-based routing, we need to use Hash location strategy when Hash (#) will be appended to the URL. While implementing hash-based routing strategy, we need to pass Boolean useHash to true.

## Route loading
    1. Pre-Loading
    2. Eager Loading
    3. Lazy Loading

## Angular Form
    1. Reactive Forms
    2. Template-driven Forms   

## Compilation Types in Angular
    1. Just-in-Time (JIT): Just-in-Time (JIT) is a type of compilation that compiles your app in the browser at runtime. JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands.
    ng build
    ng serve

    2. Ahead-of-Time (AOT): Ahead-of-Time (AOT) is a type of compilation that compiles your app at build time. For AOT compilation, include the --aot option with the ng build or ng serve command as below
    ng build --aot
    ng serve --aot
__Note:__ The ng build command with the --prod meta-flag (`ng build --prod`) compiles with AOT by default.

## Advantages with AOT
    1. Faster rendering: The browser downloads a pre-compiled version of the application. So it can render the application immediately without compiling the app.
    2. Fewer asynchronous requests: It inlines external HTML templates and CSS style sheets within the application javascript which eliminates separate ajax requests.
    3. Smaller Angular framework download size: Doesn't require downloading the Angular compiler. Hence it dramatically reduces the application payload.
    4. Detect template errors earlier: Detects and reports template binding errors during the build step itself
    5. Better security: It compiles HTML templates and components into JavaScript. So there won't be any injection attacks.



deedtmp+r3t4x@gmail.com - 03/09/2021   
an.d.rew.h.e.ren.an.tm.p@gmail.com - 03/09/2021   
s.a.lv.a.to.t.u.c.k.ertmp@gmail.com - 03/09/2021   
na.t.ha.nluisjame.st.m.p@gmail.com - 03/09/2021   
sdria76@gmailnator.com - 03/09/2021   
franc.o.bar.nett.tm.p@gmail.com - 03/09/2021   
ja.vi.e.rf.ranciscot.m.p@gmail.com - 03/09/2021   
f.let.c.h.e.rhar.vey.tmp@gmail.com - 03/09/2021   
lengtmp+rq7ey@gmail.com - 03/09/2021   
josero.d.r.i.qu.ez.tmp@gmail.com - 03/09/2021   
hay.a.d.av.i.d.s.ont.m.p@gmail.com - 03/09/2021   
a.dr.ie.nc.ama.c.h.otm.p@gmail.com - 03/09/2021   
carstmp+4rmhk@gmail.com - 03/09/2021   
a.dri.enca.mac.h.ot.m.p@gmail.com - 03/09/2021   
le.o.nel.kno.wl.et.m.p@gmail.com - 03/09/2021   
jo.na.t.h.a.nm.ic.hae.ltm.p@gmail.com - 03/09/2021   
wuvjeio@gmailnator.com - 03/09/2021   
owyetmp+cg45s@gmail.com - 03/09/2021   
mo.rt.a.l.ko.mba.tstmp@gmail.com - 03/09/2021   
hay.ada.v.ids.ontm.p@gmail.com - 03/09/2021   
koletmp+ds91p@gmail.com - 03/09/2021   
f.i.sh.e.r.a.dk.i.nstmp@gmail.com - 03/09/2021   
how.ar.dn.av.arro.tm.p@gmail.com - 03/09/2021   
combtmp+l76fd@gmail.com - 03/09/2021   
lacktmp+xlg2v@gmail.com - 03/09/2021   
aveltmp+xev5f@gmail.com - 03/09/2021   
cbxpxztmp+s9iym@gmail.com - 03/09/2021   
j.a.n.e.r.e.bec.calynnt.mp@gmail.com - 03/09/2021   
f.as.t.an.d.fu.r.iostm.p@gmail.com - 03/09/2021   
miyatmp+vus9f@gmail.com - 03/09/2021   
rox.a.nne.n.ic.hols.tmp@gmail.com - 03/09/2021   
ha.n.n.a.h.eliz.ab.et.htmp@gmail.com - 03/09/2021   
mari.okar.t.de.l.uxe.t.mp@gmail.com - free   
