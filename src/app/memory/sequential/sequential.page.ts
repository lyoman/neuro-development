import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequential',
  templateUrl: './sequential.page.html',
  styleUrls: ['./sequential.page.scss'],
})
export class SequentialPage implements OnInit {

  constructor(private router: Router,
    ) { }

  ngOnInit() {
  }

}
