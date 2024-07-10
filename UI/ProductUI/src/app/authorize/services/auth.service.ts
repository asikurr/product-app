import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResponseModel } from '../login-res.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginRequestModel } from '../login-request.model';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $user = new BehaviorSubject<User | undefined>(undefined);
  constructor(private http : HttpClient) { }

  login(loginReq : LoginRequestModel) : Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.apiBaseUrl}/api/auth/login`, {
      email : loginReq.email,
      password : loginReq.password
    });
  }

  setUser(user : User) : void {
    this.$user.next(user);
    localStorage.setItem('user-email' , user.email);
    localStorage.setItem('user-roles', user.roles.join(','));
  }

  userInfo() : Observable<User | undefined>{
    return this.$user.asObservable();
  }
}
