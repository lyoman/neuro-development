import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.page.html',
  styleUrls: ['./guardian.page.scss'],
})
export class GuardianPage implements OnInit {

  user = { id: '', username: '', password: ''};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  guest() {
    this.router.navigateByUrl('/login');
  }

  login() {
    this.router.navigateByUrl('/tabs');
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
