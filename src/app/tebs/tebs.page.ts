import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tebs',
  templateUrl: './tebs.page.html',
  styleUrls: ['./tebs.page.scss'],
})
export class TebsPage implements OnInit {

  id: any;
  token: any;

  constructor(
    public router: Router,
    private platform: Platform,

  ) {
    
  }

  ngOnInit() {

  }
}