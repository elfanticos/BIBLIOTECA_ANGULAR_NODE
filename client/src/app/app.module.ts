import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/**ROUTER */
import { AppRoutingModule } from './app.routing';

/**COMPONENT */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { FormComponent } from './components/form/form.component';
import { NewCourseFormComponentComponent } from './new-course-form-component/new-course-form-component.component';
import { FormFormBuilderComponent } from './form-form-builder/form-form-builder.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    NewCourseFormComponentComponent,
    FormFormBuilderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }