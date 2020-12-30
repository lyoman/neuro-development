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

  footsteps: any;
  originalFootSteps = [];

  submitedArray = [];
  viewSteps = [];

    step1 = '';
    step2 = '';
    step5: '';
    step3: '';
    step4: '';
    step6: '';
    step7: '';

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    this.footsteps = this.navData.getParamData();
    console.log('footsteps', this.footsteps);
    this.originalFootSteps = this.graphicsService.footsteps;
    console.log('original footsteps', this.originalFootSteps);
  }

  finish(stepIndex,step) {
    this.viewSteps.push(step);
    this.originalFootSteps.splice(stepIndex, 1);
    console.log('new array', this.viewSteps);
    console.log('original arrary', this.originalFootSteps);
  }

  results (footsteps) {
    this.navData.setParamData(footsteps);
    this.router.navigateByUrl('/sequential/footprints/results');
  }

}
