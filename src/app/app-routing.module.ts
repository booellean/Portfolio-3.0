import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WebdevComponent } from './webdev/webdev.component';
import { DesignComponent } from './design/design.component';
import { IllustrationComponent } from './illustration/illustration.component';

const routes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'webdev',
        component: WebdevComponent
    },
    {
        path: 'design',
        component: DesignComponent
    },
    {
        path: 'illustration',
        component: IllustrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }