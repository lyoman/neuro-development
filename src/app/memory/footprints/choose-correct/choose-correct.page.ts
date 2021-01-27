import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GraphicsService } from './../../../services/graphics.service';
import { LoadingService } from './../../../services/loading.service';
import { NavigateDataService } from './../../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-correct',
  templateUrl: './choose-correct.page.html',
  styleUrls: ['./choose-correct.page.scss'],
})
export class ChooseCorrectPage implements OnInit {

  Shuffledfootsteps = [];
  originalFootSteps = [];

  submitedArray = [];
  viewSteps = [];

  pushedToResults = [];

  failedResults = [];

  getUserNum: any;


  Ogfootsteps = [];

  Ogfootsteps1 = [
    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
    './../../../assets/imgs/graphics/5.png',
    './../../../assets/imgs/graphics/6.png',
    './../../../assets/imgs/graphics/7.png',

    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
    './../../../assets/imgs/graphics/5.png',
    './../../../assets/imgs/graphics/6.png',
    './../../../assets/imgs/graphics/7.png',

    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
    './../../../assets/imgs/graphics/5.png',
    './../../../assets/imgs/graphics/6.png',
    './../../../assets/imgs/graphics/7.png',

    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
  ];

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    private navCtrl: NavController,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    // console.log('the shuffled array', JSON.parse(localStorage.getItem('userList')));
    this.originalFootSteps = this.graphicsService.footsteps;//original order of footprints
    // console.log('original footsteps', this.originalFootSteps);

    this.rebuildOriginal();
  }

  presentAlert3() {
    const alert = this.alertController.create({
    header: "Success !!!!",
    subHeader: 'Your Ambulance request was sucessfully sent',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  rebuildOriginal() {
    this.getUserNum = JSON.parse(localStorage.getItem('userNum'));
    console.log('number', this.getUserNum)
    for (let i=0; i<this.getUserNum; i++) {
      this.Ogfootsteps.push(this.Ogfootsteps1[i]);
    }
    console.log("orgSteps", this.Ogfootsteps);
  }

  finish(stepIndex,step) {
    this.viewSteps.push(step);
    this.Ogfootsteps.splice(stepIndex, 1);
    // console.log('new array', this.viewSteps);
    // console.log('original arrary', this.Ogfootsteps);
  }

  Removefinish(stepIndex,step) {
    this.Ogfootsteps.push(step);
    this.viewSteps.splice(stepIndex, 1);
    // console.log('new array', this.viewSteps);
    // console.log('original arrary', this.Ogfootsteps);
  }

  results (footsteps) {
    this.navData.setParamData1(footsteps);// the foot prints that were chosen by the user
    // console.log('User selected footsteps', footsteps);
    // console.log('Shuffledfootsteps', JSON.parse(localStorage.getItem('userList')));
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('userList'));
    for (let i = 0; i < footsteps.length; i++) {
      if(footsteps[i] == this.Shuffledfootsteps[i])
      {
        // console.log('matched index ' + i);
        this.pushedToResults.push(footsteps[i]);
      } else {
        this.failedResults.push(footsteps[i]);
      }
    }
    this.navData.setParamData3(this.pushedToResults);
    this.navData.setParamData2(this.failedResults);
    this.navCtrl.navigateRoot('/sequential/footprints/results');
    // this.router.navigateByUrl('/sequential/footprints/results');
  }

}
