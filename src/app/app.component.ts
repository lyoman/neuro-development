import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tebs',
      icon: 'home'
    },
    {
      title: 'Training',
      url: '/tebs/teb2',
      icon: 'paper-plane'
    },
    {
      title: 'Remediation',
      url: '/tebs/teb3',
      icon: 'archive'
    },
    {
      title: 'Tutoring',
      url: '/tebs/teb4',
      icon: 'book'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help'
    },
    {
      title: 'Contact',
      url: '/contactus',
      icon: 'call'
    },
    {
      title: 'About',
      url: '/aboutus',
      icon: 'information-circle'
    },
    // {
    //   title: 'Privacy policy',
    //   url: 'https://yourfamilyclinic.com/privacy.html',
    //   icon: 'information-circle'
    // }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  loggedIn = false;
  dark = false; 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
