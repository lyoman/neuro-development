import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.page.html',
  styleUrls: ['./algebra.page.scss'],
})
export class AlgebraPage implements OnInit {

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
