import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private auth: AuthserviceService,
    private router: Router) { }

  ngOnInit() {
  }
  login(logindetails) {
    console.log(logindetails.value.user.username);
    console.log(logindetails.value.user.password);
    this.user = {
      username : logindetails.value.user.username,
      password: logindetails.value.user.password
    };
    this.router.navigate(['/latestNews']);
    // this.auth.validateUser(this.user)

  }
}
