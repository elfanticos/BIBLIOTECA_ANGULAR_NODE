import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './components/home.component';
import { FormComponent } from './components/form/form.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'app-form', component: FormComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }