import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: "webforms",
        loadChildren: () => import('./web-forms/web-forms.module').then(mod => mod.WebFormsModule)
    },
    {
        path: 'lifecycle-hooks',
        loadChildren: () => import('./lifecycle-hooks/lifecycle-hooks.module').then(mod => mod.LifecycleHooksModule)
    },
    {
        path: 'share-data',
        loadChildren: () => import('./share-data/share-data.module').then(mod => mod.ShareDataModule)
    },
    {
        path: "contact-us",
        loadChildren: () => import('./contact-us/contact-us.module').then(mod => mod.ContactUsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }