import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../login-res.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginRequestModel } from '../login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(loginReq : LoginRequestModel) : Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.apiBaseUrl}/api/auth/login`, {
      email : loginReq.email,
      password : loginReq.password
    });
  }
}
