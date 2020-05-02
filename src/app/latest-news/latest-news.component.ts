import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  isAdmin;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isAdminvalue();
  }

  isAdminvalue() {
    this.isAdmin = localStorage.getItem('isAdmin');
  }
  logout() {
    localStorage.clear();
    window.sessionStorage.removeItem('user');
    this.router.navigate(['dashboard']);
  }
}
