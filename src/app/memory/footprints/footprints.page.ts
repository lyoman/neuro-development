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

  showImage;
  showImage2;
  showImage3;
  showImage4;
  showImage5;
  showImage6;
  showImage7;

  myButton;

  nextPage = [];

  constructor(
    private navData: NavigateDataService,
    private router: Router,
    private navCtrl: NavController,
    private graphicsService: GraphicsService,
  ) {
    this.showImage = true;
    this.showImage2 = false;
    this.showImage3 = false;
    this.showImage4 = false;
    this.showImage5 = false;
    this.showImage6 = false;
    this.showImage7 = false;
    this.myButton = false;
    this.hidingDivs();
  }

  ngOnInit() {
    // this.footsteps = this.graphicsService.footsteps;
    // const footsteps = this.shuffle(this.graphicsService.footsteps);
    this.footsteps = this.shuffle1(this.graphicsService.footsteps);
    //  console.log('shuffle', this.footsteps);
  }

  hidingDivs() {
    setTimeout(() => {
      this.showImage = false;
      this.showImage2 = true;
    }, 3000);
    setTimeout(() => {
      this.showImage2 = false;
      this.showImage3 = true;
    }, 6000);
    setTimeout(() => {
      this.showImage3 = false;
      this.myButton = true;
    }, 9000);
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

  shuffle1(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  first(first) {
    this.firstDiv = first;
    this.secondDiv = "true";
  }

  second(second) {
    this.secondDiv = second;
    this.thirdDiv = "true";
  }

  choose(footprints) {
    this.navData.setParamData;
    // console.log('me', footprints);
    this.nextPage = footprints;
    localStorage.setItem('userList', JSON.stringify(this.nextPage));
    // this.router.navigateByUrl('choose-correct');
    this.navCtrl.navigateRoot('/sequential/footprints/choose-correct');
  }

}
