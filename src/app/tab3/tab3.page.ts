
// import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private plt: Platform,
    private router: Router,
  ) {
  }

  ngOnInit() {

  }

}
