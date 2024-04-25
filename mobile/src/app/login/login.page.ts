import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  errMsg = false;

  constructor(
    private  router:  Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  login(data: any){
    console.log('login', data.value);
    this.errMsg = false;
    
    this.authService.login(data.value.email, data.value.pass)
    .subscribe((res)=>{
      if (res) {
        this.router.navigate(['tabs']);
      } else {
        this.errMsg = true;
      }
      
    });

  }
}
