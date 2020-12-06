import { Platform, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-teb1',
  templateUrl: './teb1.page.html',
  styleUrls: ['./teb1.page.scss'],
})
export class Teb1Page implements OnInit {

  constructor(
              public router: Router, 
              ) { 

              }

  ngOnInit() {
  
  }

  tutoring () {
    this.router.navigateByUrl('/tebs/teb4')
  }

  remediation () {
    this.router.navigateByUrl('/tebs/teb3')
  }

  training () {
    this.router.navigateByUrl('/tebs/teb2')
  }


}

