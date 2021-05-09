import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footsteps-tryagain',
  templateUrl: './footsteps-tryagain.page.html',
  styleUrls: ['./footsteps-tryagain.page.scss'],
})
export class FootstepsTryagainPage implements OnInit {


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
  initialNum = 3;

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
    this.footsteps = this.navData.getParamData3();
    this.wrongSteps = this.navData.getParamData2();
    this.originalSteps = JSON.parse(localStorage.getItem('userList'));

    this.kimAgain = JSON.parse(localStorage.getItem("logic"));
    this.kim = JSON.parse(localStorage.getItem('initialNum'));

    console.log("original footsteps", this.originalSteps);
    console.log('Correct footsteps', this.footsteps);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('userNum'));
    this.zviko = JSON.parse(localStorage.getItem('initialNum'));

  }

  presentAlertResults() {
    const alert = this.alertController.create({
      header: "Done Choosing !!!!",
      subHeader: 'You have reached the number of steps, press finish to proceed',
      buttons: ['OK']
    }).then(alert => alert.present());
  }

  Removefinish(stepIndex, step) {
    this.viewSteps.splice(stepIndex, 1);
  }

  finish(step) {

    if (this.viewSteps.length == JSON.parse(localStorage.getItem('initialNum'))) {
      this.presentAlertResults();
    } else {
      this.viewSteps.push(step);
    }
  }


  results(footsteps) {
    this.navData.setParamData1(footsteps);// the foot prints that were chosen by the user
    console.log('User selected footsteps', footsteps);
    console.log('Shuffledfootsteps', JSON.parse(localStorage.getItem('userList')));
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('userList'));

    for (let i = 0; i < footsteps.length; i++) {
      if (footsteps[i] == this.Shuffledfootsteps[i]) {
        // console.log('matched index ' + i);
        this.pushedToResults.push(footsteps[i]);
        console.log("1");
      } else {
        this.failedResults.push(footsteps[i]);
      }
    }
    this.navData.setParamData3(this.pushedToResults);
    this.navData.setParamData2(this.failedResults);
    localStorage.setItem('pushedToResults', JSON.stringify(this.pushedToResults));
    localStorage.setItem('failedResults', JSON.stringify(this.failedResults));
    // this.navCtrl.navigateRoot('/sequential/footprints/results');
    this.router.navigateByUrl('/sequential/footprints/tryagain-results');
  }

}
