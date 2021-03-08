import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tryagain-results',
  templateUrl: './tryagain-results.page.html',
  styleUrls: ['./tryagain-results.page.scss'],
})
export class TryagainResultsPage implements OnInit {

  anime = [];
  wrongSteps = [];
  kim;
  zviko;

  completed = false;
  animeinitialNum = 3;

  originalSteps = [];

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    this.anime = JSON.parse(localStorage.getItem('animepushedToResults'));
    this.wrongSteps = JSON.parse(localStorage.getItem('animefailedResults'));
    this.originalSteps = JSON.parse(localStorage.getItem('animeuserList'));

    console.log("original anime", this.originalSteps);
    console.log('Correct anime', this.anime);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('animeuserNum'));
    this.zviko = JSON.parse(localStorage.getItem('animeinitialNum'));

    if (this.anime.length == this.kim) {
      this.presentAlert5();
    } else {
      this.presentAlert4();
    }

    if (JSON.parse(localStorage.getItem('animeinitialNum')) == this.anime.length) {
      var animeinitialNum = (this.zviko + 2);
      console.log("this.navData.getParamData3().length", this.anime.length);
      console.log("JSON.parse(localStorage.getItem('animeinitialNum'))", JSON.parse(localStorage.getItem('animeinitialNum')));

      console.log("var animeinitialNum", animeinitialNum);

      localStorage.setItem('animeinitialNum', JSON.stringify(animeinitialNum));
      this.presentAlert9();
    }

    if (this.anime.length == 25) {
      this.completed = true;
      localStorage.setItem('animecomplete', JSON.stringify(this.completed));
      this.presentAlert3();
    }
  }

  presentAlert5() {
    const alert = this.alertController.create({
      header: "Way to go !!!!",
      subHeader: 'Level completed, choose more steps and play again!!!',
      cssClass: 'custom-alertDanger',
      buttons: ['Dismiss']
    }).then(alert => alert.present());
  }

  presentAlert3() {
    const alert = this.alertController.create({
      header: "Way to go !!!!",
      subHeader: 'Level completed, you are a genius, choose a different icon and play again!!!',
      cssClass: 'custom-alertDanger',
      buttons: ['Dismiss']
    }).then(alert => alert.present());
  }

  presentAlert9() {
    const alert = this.alertController.create({
      header: "Way to go !!!!",
      subHeader: 'Level completed, Procceed to the next level!!!',
      cssClass: 'custom-alertDanger',
      buttons: ['Dismiss']
    }).then(alert => alert.present());
  }

  presentAlert4() {
    const alert = this.alertController.create({
      header: "Completed !!!!",
      subHeader: 'Well played here are your results, feel free to play again',
      cssClass: 'custom-alertDanger',
      buttons: ['Dismiss']
    }).then(alert => alert.present());
  }


}
