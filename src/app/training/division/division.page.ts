import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.page.html',
  styleUrls: ['./division.page.scss'],
})
export class DivisionPage implements OnInit {

  videos = [
    {
      title: 'Introduction to long division',
      description: 'Introduction to long division',
      url: 'https://www.youtube.com/embed/52ZlXsFJULI',
    },
    {
      title: 'Introduction to long division',
      description: 'Introduction to long division',
      url: 'https://www.youtube.com/embed/52ZlXsFJULI',
    },
    {
      title: 'Introduction to long division',
      description: 'Introduction to long division',
      url: 'https://www.youtube.com/embed/52ZlXsFJULI',
    },
    {
      title: 'Introduction to long division',
      description: 'Introduction to long division',
      url: 'https://www.youtube.com/embed/52ZlXsFJULI',
    },
    {
      title: 'Introduction to long division',
      description: 'Introduction to long division',
      url: 'https://www.youtube.com/embed/52ZlXsFJULI',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
