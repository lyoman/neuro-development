import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-tryagain',
  templateUrl: './animals-tryagain.page.html',
  styleUrls: ['./animals-tryagain.page.scss'],
})
export class AnimalsTryagainPage implements OnInit {

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
  animalsinitialNum = 3;

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
    this.originalSteps = JSON.parse(localStorage.getItem('animalsuserList'));

    this.kimAgain = JSON.parse(localStorage.getItem("logic"));
    this.kim = JSON.parse(localStorage.getItem('animalsinitialNum'));

    console.log("original footsteps", this.originalSteps);
    console.log('Correct footsteps', this.footsteps);
    console.log('Correct wrongSteps', this.wrongSteps);

    this.kim = JSON.parse(localStorage.getItem('animalsuserNum'));
    this.zviko = JSON.parse(localStorage.getItem('animalsinitialNum'));

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

    if (this.viewSteps.length == JSON.parse(localStorage.getItem('animalsinitialNum'))) {
      this.presentAlertResults();
    } else {
      this.viewSteps.push(step);
    }
  }


  results (footsteps) {
    this.navData.setParamData1(footsteps);// the foot prints that were chosen by the user
    console.log('User selected footsteps', footsteps);
    console.log('Shuffledfootsteps', JSON.parse(localStorage.getItem('animalsuserList')));
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('animalsuserList'));

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
    localStorage.setItem('animalspushedToResults', JSON.stringify(this.pushedToResults));
    localStorage.setItem('animalsfailedResults', JSON.stringify(this.failedResults));
    // this.navCtrl.navigateRoot('/sequential/animals/results');
    this.router.navigateByUrl('/sequential/animals/tryagain-results');
  }

}
