// import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth/auth.service';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  token: any;
  users: any;
  response: any;
  response1: any;
  status: any;

  constructor(
    public router: Router,
  ) {

  }

  ngOnInit() {
  }


  backToWelcome() {
    this.router.navigateByUrl('login');

  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
  }

}
