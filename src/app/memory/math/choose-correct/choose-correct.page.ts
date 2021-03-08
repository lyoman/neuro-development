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
    './../../../assets/imgs/math/1.png',
    './../../../assets/imgs/math/2.png',
    './../../../assets/imgs/math/3.png',
    './../../../assets/imgs/math/4.png',
    './../../../assets/imgs/math/5.png',
    './../../../assets/imgs/math/6.png',
    './../../../assets/imgs/math/7.png',

    './../../../assets/imgs/math/1.png',
    './../../../assets/imgs/math/2.png',
    './../../../assets/imgs/math/3.png',
    './../../../assets/imgs/math/4.png',
    './../../../assets/imgs/math/5.png',
    './../../../assets/imgs/math/6.png',
    './../../../assets/imgs/math/7.png',

    './../../../assets/imgs/math/1.png',
    './../../../assets/imgs/math/2.png',
    './../../../assets/imgs/math/3.png',
    './../../../assets/imgs/math/4.png',
    './../../../assets/imgs/math/5.png',
    './../../../assets/imgs/math/6.png',
    './../../../assets/imgs/math/7.png',

    './../../../assets/imgs/math/1.png',
    './../../../assets/imgs/math/2.png',
    './../../../assets/imgs/math/3.png',
    './../../../assets/imgs/math/4.png',
  ];

  kimAgain = [];
  kim;
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
    this.originalFootSteps = this.graphicsService.math;//original order of math
    // console.log('original math', this.originalFootSteps);

    console.log(localStorage.getItem("mathlogic"));
    this.kimAgain = JSON.parse(localStorage.getItem("mathlogic"));
    this.kim = JSON.parse(localStorage.getItem('mathinitialNum'));
    this.rebuildOriginal();
  }

  presentAlert3() {
    const alert = this.alertController.create({
    header: "Success !!!!",
    subHeader: 'Your Ambulance request was sucessfully sent',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlertResults() {
    const alert = this.alertController.create({
    header: "Done Choosing !!!!",
    subHeader: 'You have reached the number of steps, press finish to proceed',
    // cssClass: 'custom-alertDanger',
    buttons: ['OK']}).then(alert=> alert.present());
  }

  rebuildOriginal() {
    this.getUserNum = JSON.parse(localStorage.getItem('mathinitialNum'));
    console.log('number', this.getUserNum)
    for (let i=0; i<this.getUserNum; i++) {
      this.Ogfootsteps.push(this.Ogfootsteps1[i]);
    }
    console.log("orgSteps", this.Ogfootsteps);
  }

  finish(stepIndex,step) {

    if (this.viewSteps.length == JSON.parse(localStorage.getItem('mathinitialNum'))) {
      this.presentAlertResults();
    } else {
      this.viewSteps.push(step);
    }
    // this.Ogfootsteps.splice(stepIndex, 1);
    // console.log('new array', this.viewSteps);
    // console.log('original arrary', this.Ogfootsteps);
  }

  Removefinish(stepIndex,step) {
    // this.Ogfootsteps.push(step);
    this.viewSteps.splice(stepIndex, 1);
    // console.log('new array', this.viewSteps);
    // console.log('original arrary', this.Ogfootsteps);
  }

  results (math) {
    this.navData.setParamData1(math);// the foot prints that were chosen by the user
    // console.log('User selected math', math);
    // console.log('Shuffledfootsteps', JSON.parse(localStorage.getItem('userList')));
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('mathuserList'));
    for (let i = 0; i < math.length; i++) {
      if(math[i] == this.Shuffledfootsteps[i])
      {
        // console.log('matched index ' + i);
        this.pushedToResults.push(math[i]);
      } else {
        this.failedResults.push(math[i]);
      }
    }
    this.navData.setParamData3(this.pushedToResults);
    this.navData.setParamData2(this.failedResults);
    localStorage.setItem('mathpushedToResults', JSON.stringify(this.pushedToResults));
    localStorage.setItem('mathfailedResults', JSON.stringify(this.failedResults));
    this.navCtrl.navigateRoot('/sequential/math/results');
    // this.router.navigateByUrl('/sequential/math/results');
  }

}
