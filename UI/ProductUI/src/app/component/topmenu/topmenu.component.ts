import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authorize/services/auth.service';
import { User } from '../../authorize/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css',
})
export class TopmenuComponent implements OnInit {
  user?: User;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.userInfo().subscribe({
      next: (res) => {
        this.user = res;
      },
    });

    this.user = this.authService.getUser();
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
