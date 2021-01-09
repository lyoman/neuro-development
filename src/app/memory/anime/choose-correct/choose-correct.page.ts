import { NavController } from '@ionic/angular';
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

  getUserNum: any;

  Ogfootsteps = [];

  Ogfootsteps1 = [
    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
    './../../../assets/imgs/anime/5.png',
    './../../../assets/imgs/anime/6.png',
    './../../../assets/imgs/anime/7.png',

    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
    './../../../assets/imgs/anime/5.png',
    './../../../assets/imgs/anime/6.png',
    './../../../assets/imgs/anime/7.png',

    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
    './../../../assets/imgs/anime/5.png',
    './../../../assets/imgs/anime/6.png',
    './../../../assets/imgs/anime/7.png',

    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
  ];

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    // console.log('the shuffled array', JSON.parse(localStorage.getItem('userList')));
    this.originalFootSteps = this.graphicsService.anime;//original order of footprints
    // console.log('original footsteps', this.originalFootSteps);

    this.rebuildOriginal();
  }

  rebuildOriginal() {
    this.getUserNum = JSON.parse(localStorage.getItem('animeuserNum'));
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
    this.Shuffledfootsteps = JSON.parse(localStorage.getItem('animeuserList'));
    for (let i = 0; i <= 6; i++) {
      if(footsteps[i] == this.Shuffledfootsteps[i])
      {
        // console.log('matched index ' + i);
        this.pushedToResults.push(footsteps[i]);
      }
    }
    this.navData.setParamData3(this.pushedToResults);
    this.navCtrl.navigateRoot('/sequential/anime/results');
    // this.router.navigateByUrl('/sequential/footprints/results');
  }

}
