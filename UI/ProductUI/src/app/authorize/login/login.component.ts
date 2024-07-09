import { Component } from '@angular/core';
import { LoginRequestModel } from '../login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  model: LoginRequestModel;
  constructor(private authService : AuthService, private cookieService : CookieService) {
    this.model = {
      email: '',
      password: '',
    };
  }

  loginSubmit(): void {
    // this.authService.login(this.model)
    // .subscribe({
    //   next : response => {
    //      this.cookieService.set('Authorization', `Bearer ${response.token}`,
    //     undefined, '/', undefined, true, 'Strict');

    //     console.log(response);
        
    //   }
    // })
  }
}
