import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  math = [];
  wrongSteps = [];
  kim;
  zviko;

  completed = false;
  mathinitialNum = 3;

  originalSteps = [];

  marian :any;

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    this.math = JSON.parse(localStorage.getItem('mathpushedToResults'));
    this.wrongSteps = JSON.parse(localStorage.getItem('mathfailedResults'));
    this.originalSteps = JSON.parse(localStorage.getItem('mathuserList'));

    console.log("original math", this.originalSteps);
    console.log('Correct math', this.math);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('mathuserNum'));
    this.zviko = JSON.parse(localStorage.getItem('mathinitialNum'));
    
    if (this.math.length == this.kim) {
      this.presentAlert5();
    } else {
      this.presentAlert4();
    }

    if (JSON.parse(localStorage.getItem('mathinitialNum')) == this.math.length) {
      // this.mathinitialNum += 2;
      localStorage.setItem('mathnewLevel', JSON.stringify("yes"));
      var mathinitialNum = (this.zviko + 2);
      console.log("this.navData.getParamData3().length", this.math.length);
      console.log("JSON.parse(localStorage.getItem('mathinitialNum'))", JSON.parse(localStorage.getItem('mathinitialNum')));
      console.log("mathinitialNum", mathinitialNum);
      
      localStorage.setItem('mathnextLevel', JSON.parse(mathinitialNum));
      localStorage.setItem('mathinitialNum', JSON.stringify(mathinitialNum));
      this.presentAlert9();
    } 

    if(this.math.length == 25) {
      this.completed = true;
      localStorage.setItem('mathcomplete', JSON.stringify(this.completed));
      this.presentAlert3();
    }
  }

  presentAlert5() {
    const alert = this.alertController.create({
    header: "Way to go !!!!",
    subHeader: 'Level completed, choose more steps and play again!!!',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert3() {
    const alert = this.alertController.create({
    header: "Way to go !!!!",
    subHeader: 'Level completed, you are a genius, choose a different icon and play again!!!',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert9() {
    const alert = this.alertController.create({
    header: "Way to go !!!!",
    subHeader: 'Level completed, Procceed to the next level!!!',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert4() {
    const alert = this.alertController.create({
    header: "Completed !!!!",
    subHeader: 'Well played here are your results, feel free to play again',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

}
