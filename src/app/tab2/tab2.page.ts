// import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

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
