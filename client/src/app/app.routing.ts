import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**COMPONENTS */
import { HomeComponent} from './components/home.component';
import { FormComponent } from './components/form/form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { FormFormBuilderComponent } from './form-form-builder/form-form-builder.component';
import { PostComponent } from './post/post.component';

const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'app-form', component: FormComponent},
    { path: 'app-form-array', component : NewCourseFormComponentComponent},
    { path: 'app-form-builder', component: FormFormBuilderComponent},
    { path: 'app-post', component: PostComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }