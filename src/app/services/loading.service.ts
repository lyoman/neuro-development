import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService { 

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Loading please wait...',
        spinner: 'crescent',
        duration: 1500
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
  
      console.log('Loading dismissed!');
    }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
