# Forms Explained

## Template Driven Form

1. Always set a name for every form inputs.

2. `(ngModel)="model.email"` is used for one way binding whereas `[(ngModel)]="model.email"` is used for two way binding. Keep in mind to set model name same as input name. Else, you will get multiple values for same input.

3. Set `#loginForm="ngForm"` for special form template reference.

4. Use `(ngSubmit)="login(loginForm.values)"` instead of `(submit)="login(loginForm.values)"`.
