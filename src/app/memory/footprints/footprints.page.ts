import { GraphicsService } from './../../services/graphics.service';
import { Router } from '@angular/router';
import { NavigateDataService } from './../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-footprints',
  templateUrl: './footprints.page.html',
  styleUrls: ['./footprints.page.scss'],
})
export class FootprintsPage implements OnInit {

  secondDiv = "false";
  thirdDiv = "false";
  firstDiv = "true";
  footsteps = [];

  constructor(
    private navData: NavigateDataService,
    private router: Router,
    private navCtrl: NavController,
    private graphicsService: GraphicsService,
    ) { }

  ngOnInit() {

    this.shuffle(this.graphicsService.footsteps);
    console.log('shuffle', this.graphicsService.footsteps);
    this.footsteps = this.graphicsService.footsteps;
  }

  shuffle(a) {
    let b, c, d;
    c = a.length;
    while (c) {
      b = Math.random() * c-- | 0;
      d = a[c];
      a[c] = a[b];
      a[b] = d;
    }
  }

  first (first) {
    this.firstDiv = first;
    this.secondDiv = "true";
  }

  second(second){
    this.secondDiv = second;
    this.thirdDiv = "true";
  }

  choose(footprints) {
    this.navData.setParamData(footprints);
    // this.router.navigateByUrl('choose-correct');
    this.navCtrl.navigateRoot('/sequential/footprints/choose-correct');
  }

}
