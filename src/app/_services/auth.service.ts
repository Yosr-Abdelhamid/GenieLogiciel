import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(Email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      Email,
      password
    }, httpOptions);
  }

  register(Nom:string, Prenom:String, Email: string, Adresse:string, NumeroCNSS:number,
    Telephone:number, DateNaiss:Date,password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      Nom,
      Prenom,
      Email,
      Adresse,
      NumeroCNSS,
      Telephone,
      DateNaiss,
      password
    }, httpOptions);
  }
}