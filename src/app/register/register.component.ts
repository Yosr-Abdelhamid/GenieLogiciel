import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
  Nom:null,
  Prenom: null,
  Adresse: null,
  Email: null,
  NumeroCNSS: null,
  Telephone: null,
  DateNaiss: null,
  password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { Nom, Prenom,Adresse ,Email,NumeroCNSS,Telephone,DateNaiss, password } = this.form;

    this.authService.register(Nom, Prenom,Adresse , Email,NumeroCNSS,Telephone,DateNaiss, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
