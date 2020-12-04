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

}

  ngOnInit() {
  }




}
