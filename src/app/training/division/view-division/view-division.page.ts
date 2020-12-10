import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-view-division',
  templateUrl: './view-division.page.html',
  styleUrls: ['./view-division.page.scss'],
})
export class ViewDivisionPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

  }

  title = this.route.snapshot.paramMap.get('title');
  description = this.route.snapshot.paramMap.get('description');
  url = this.route.snapshot.paramMap.get('url');


}
