import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { remember_me: 1, email: '', password: ''};

  loading: any;

  who = "";
  error: any;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  guest() {
    this.router.navigateByUrl('/guardian');
  }

  login() {
    this.router.navigateByUrl('/home');
  }

  login1() {
    if (this.user.email == "" || this.user.password == "") {
      this.presentAlert1();
    }
    else {
      // this.loading.presentLoading();
      this.loading = true;
      this.authService.login('login', this.user).subscribe((res) => {
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('loggedIn', 'true');
        console.log(res);
        this.loading = false;
        if(this.who == 'user') {
          this.navCtrl.navigateRoot('home');
        } else {
          this.navCtrl.navigateRoot('tebs');
        }
      }, (err) => {
        console.log(err);
        this.error = err;
        // this.loading.dismiss();
        this.loading = false;
        this.presentAlert(err.message);
      });
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }

  // presentAlert2() {
  //   const alert = this.alertController.create({
  //   header: 'Notice',
  //   message: 'To register, visit the website',
  //   subHeader: 'website link http://blindstick.herokuapp.com/register',
  //   buttons: ['Dismiss']}).then(alert=> alert.present());
  // }

  presentAlert(err) {
    const alert = this.alertController.create({
    header: 'Authentication Error!',
    message: err,
    subHeader: 'Failed to Login',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

  presentAlert1() {
    const alert = this.alertController.create({
    header: 'Error!',
    message: 'Please fill in all fields in order to login',
    subHeader: 'Fill in all fields',
    buttons: ['Dismiss']}).then(alert=> alert.present());
  }

}
