import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DepartementsComponent } from './departements/departements.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { ContactComponent } from './contact/contact.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { RegisterComponent } from './register/register.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ServicesComponent,
    DepartementsComponent,
    MedecinsComponent,
    ContactComponent,
    ActualitesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
