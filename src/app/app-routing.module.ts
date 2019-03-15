import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
    { path: '', component: BioComponent, pathMatch: 'full' },
    { path: 'api', component: ApiComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
