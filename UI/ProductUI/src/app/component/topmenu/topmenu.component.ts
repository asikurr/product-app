import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../authorize/services/auth.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent implements OnInit {

  constructor(private authService : AuthService){}

  ngOnInit(): void {
    this.authService.userInfo()
    .subscribe({
      next : res =>{
        console.log(res);
        
      }
    })
  }
}
