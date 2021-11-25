import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DepartementsComponent } from './departements/departements.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'departements', component: DepartementsComponent },
  { path: 'medecins', component: MedecinsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
   {path: 'login/register', component: RegisterComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
