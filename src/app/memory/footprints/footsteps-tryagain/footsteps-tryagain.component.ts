import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footsteps-tryagain',
  templateUrl: './footsteps-tryagain.component.html',
  styleUrls: ['./footsteps-tryagain.component.scss'],
})
export class FootstepsTryagainComponent implements OnInit {

  footsteps = [];
  wrongSteps = [];
  kim;
  zviko;

  completed = false;
  initialNum = 3;

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
    this.footsteps = this.navData.getParamData3();
    this.wrongSteps = this.navData.getParamData2();
    this.originalSteps = JSON.parse(localStorage.getItem('userList'));

    console.log("original footsteps", this.originalSteps);
    console.log('Correct footsteps', this.footsteps);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('userNum'));
    this.zviko = JSON.parse(localStorage.getItem('initialNum'));
    
    if (this.footsteps.length == this.kim) {
      this.presentAlert5();
    } else {
      this.presentAlert4();
    }

    if (JSON.parse(localStorage.getItem('initialNum')) == this.navData.getParamData3().length) {
      this.initialNum += 2;
      localStorage.setItem('initialNum', JSON.stringify(this.initialNum));
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
