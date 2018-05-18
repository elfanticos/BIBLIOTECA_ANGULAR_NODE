import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/**ROUTER */
import { AppRoutingModule } from './app.routing';

/**COMPONENT */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }