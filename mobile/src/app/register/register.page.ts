import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  register(data: any) {
    console.log('register', data.value);
    /*
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
    */
  }

}
