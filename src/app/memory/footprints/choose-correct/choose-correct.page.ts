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

  constructor(
    private navData: NavigateDataService,
    private loadingService: LoadingService,
    private graphicsService: GraphicsService,
    ) { }

  ngOnInit() {
    this.loadingService.presentLoading();
    this.footsteps = this.navData.getParamData();
    console.log('footsteps', this.footsteps);
    this.originalFootSteps = this.graphicsService.footsteps;
    console.log('original footsteps', this.originalFootSteps);
  }

}
