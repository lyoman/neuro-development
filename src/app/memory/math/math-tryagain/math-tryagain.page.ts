import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-tryagain',
  templateUrl: './math-tryagain.page.html',
  styleUrls: ['./math-tryagain.page.scss'],
})
export class MathTryagainPage implements OnInit {

  footsteps = [];
  wrongSteps = [];
  kim;
  zviko;

  
  kimAgain = [];

  Shuffledfootsteps = [];
  originalFootSteps = [];

  submitedArray = [];
  viewSteps = [];

  pushedToResults = [];

  failedResults = [];

  // Shuffledfootsteps = [];

  completed = false;
  mathinitialNum = 3;

  originalSteps = [];

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    public alertController: AlertController,
    private navCtrl: NavController,
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
    this.zviko = JSON.parse(localStorage.getItem('initialNum'));
    
    if (this.footsteps.length == this.kim) {
      this.presentAlert5();
    } else {
      this.presentAlert4();
    }

    if (JSON.parse(localStorage.getItem('initialNum')) == this.footsteps.length) {
      localStorage.setItem('newLevel', JSON.stringify("yes"));
      var initialNum = (this.zviko + 2);
      console.log("this.navData.getParamData3().length", this.footsteps.length);
      console.log("JSON.parse(localStorage.getItem('initialNum'))", JSON.parse(localStorage.getItem('initialNum')));

      console.log("var initialNum", initialNum);
      
      localStorage.setItem('initialNum', JSON.stringify(initialNum));
      localStorage.setItem('nextLevel', JSON.parse(initialNum));
      // this.presentAlert9();
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

  
  presentAlert4() {
    const alert = this.alertController.create({
    header: "Completed !!!!",
    subHeader: 'Well played here are your results, feel free to play again',
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

  presentAlertResults() {
    const alert = this.alertController.create({
    header: "Done Choosing !!!!",
    subHeader: 'You have reached the number of steps, press finish to proceed',
    buttons: ['OK']}).then(alert=> alert.present());
  }

  Removefinish(stepIndex,step) {
    this.viewSteps.splice(stepIndex, 1);
  }

  finish(step) {

    if (this.viewSteps.length == JSON.parse(localStorage.getItem('mathinitialNum'))) {
      this.presentAlertResults();
    } else {
      this.viewSteps.push(step);
    }
  }


  results (footsteps) {
    this.navData.setParamData1(footsteps);// the foot prints that were chosen by the user
    console.log('User selected math', footsteps);
    console.log('Shuffledfootsteps', JSON.parse(localStorage.getItem('mathuserList')));
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('mathuserList'));

    for (let i = 0; i < footsteps.length; i++) {
      if(footsteps[i] == this.Shuffledfootsteps[i])
      {
        // console.log('matched index ' + i);
        this.pushedToResults.push(footsteps[i]);
        console.log("1");
      } else {
        this.failedResults.push(footsteps[i]);
      }
    }
    this.navData.setParamData3(this.pushedToResults);
    this.navData.setParamData2(this.failedResults);
    localStorage.setItem('mathpushedToResults', JSON.stringify(this.pushedToResults));
    localStorage.setItem('mathfailedResults', JSON.stringify(this.failedResults));
    // this.navCtrl.navigateRoot('/sequential/math/results');
    this.router.navigateByUrl('/sequential/math/tryagain-results');
  }

  clearMemory() {
    localStorage.clear();
  }


}
