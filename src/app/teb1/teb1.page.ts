import { Platform, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-teb1',
  templateUrl: './teb1.page.html',
  styleUrls: ['./teb1.page.scss'],
})
export class Teb1Page implements OnInit {


 
  token: any;
  users :any;

  constructor(
              public router: Router, 
              ) { 

              }

  ngOnInit() {
  
  }


}

