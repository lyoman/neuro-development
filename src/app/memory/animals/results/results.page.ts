import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  footsteps = [];
  wrongSteps = [];
  kim;
  zviko;

  completed = false;
  initialNumAnimals = 3;

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
    this.footsteps = JSON.parse(localStorage.getItem('pushedToResults'));
    this.wrongSteps = JSON.parse(localStorage.getItem('failedResults'));
    this.originalSteps = JSON.parse(localStorage.getItem('userList'));

    console.log("original footsteps", this.originalSteps);
    console.log('Correct footsteps', this.footsteps);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('userNum'));
    this.zviko = JSON.parse(localStorage.getItem('initialNumAnimals'));
    
    if (this.footsteps.length == this.kim) {
      this.presentAlert5();
    } else {
      this.presentAlert4();
    }

    if (JSON.parse(localStorage.getItem('initialNumAnimals')) == this.footsteps.length) {
      // this.initialNumAnimals += 2;
      var initialNumAnimals = (this.zviko + 2);
      console.log("this.navData.getParamData3().length", this.footsteps.length);
      console.log("JSON.parse(localStorage.getItem('initialNumAnimals'))", JSON.parse(localStorage.getItem('initialNumAnimals')));
      console.log("initialNumAnimals", initialNumAnimals);
      
      localStorage.setItem('initialNumAnimals', JSON.stringify(initialNumAnimals));
      this.presentAlert9();
    } 

    if(this.footsteps.length == 25) {
      this.completed = true;
      localStorage.setItem('complete', JSON.stringify(this.completed));
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
