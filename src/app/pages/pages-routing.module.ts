import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsyncPipeComponent} from './async-pipe/async-pipe.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'webforms',
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
        path: 'share-data-using-service',
        loadChildren: () => import('./share-data-using-service/share-data-using-service.module').then(mod => mod.ShareDataUsingServiceModule)
    },
    {
        path: 'custom-pipes',
        loadChildren: () => import('./custom-pipes/custom-pipes.module').then(mod => mod.CustomPipesModule)
    },
    {
        path: 'blog-posts',
        loadChildren: () => import('./blog/posts/posts.module').then(mod => mod.PostsModule)
    },
    {
        path: 'post-details/:id',
        loadChildren: () => import('./blog/post-details/post-details.module').then(mod => mod.PostDetailsModule)
    },
    {
        path: 'async-pipes',
        // loadChildren: () => import('./async-pipe/async-pipe-routing.module').then(mod => mod.AsyncPipeRoutingModule),
        component: AsyncPipeComponent,
        children: [
            {
                path: ':id',
                loadChildren: () => import('./async-pipe/async-pipe-routing.module').then(mod => mod.AsyncPipeRoutingModule),
            }
        ]
    },
    {
        path: 'template-form',
        loadChildren: () => import('./forms/template-form/template-form.module').then(mod => mod.TemplateFormModule)
    },
    {
        path: 'reactive-form',
        loadChildren: () => import('./forms/reactive-form/reactive-forms.module').then(mod => mod.ReactiveFormModule)
    },
    {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then(mod => mod.ContactUsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
