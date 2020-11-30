// import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teb2',
  templateUrl: './teb2.page.html',
  styleUrls: ['./teb2.page.scss'],
})
export class Teb2Page implements OnInit {

  token: any;
  users :any;
  response: any;
  response1: any;

  constructor(
    public router:Router, 
    ) { 

      const token = JSON.parse(localStorage.getItem('token'));
      this.token = token;
      console.log('token again', this.token);

}

  ngOnInit() {
  }

  hey = "data";


  news(){
    this.router.navigateByUrl('newslist');
  }

  ambulance(){
    this.router.navigateByUrl('ambulance');
  }

  notices(){
    this.router.navigateByUrl('notices');
  }

  events(){
    this.router.navigateByUrl('calendar');
  }

  sports(){
    this.router.navigateByUrl('sport');
  }
  
  library(){
    this.router.navigateByUrl('library');
  }

  laptops(){
    this.router.navigateByUrl('laptops');
  }


  backToWelcome(){
    this.router.navigateByUrl('login');    

}

  logout(){
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 500);
}


}
