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
      description: 'Introduction to long division | Multiplication and division | Arithmetic | Khan Academy',
      url: 'https://www.youtube.com/embed/8Ft5iHhauJ0',
      
    },
    {
      title: 'long division with remainders',
      description: 'Dividing numbers: long division with remainders | Arithmetic | Khan Academy',
      url: 'https://www.youtube.com/embed/NcADzGz3bSI',
    },
    {
      title: 'Long Division without remainders (2)',
      description: 'Long Division without remainders (2)',
      url: 'https://www.youtube.com/embed/gFYE4KFr8uo',
    },
    {
      title: 'Long Division without remainders (3)',
      description: 'Long Division without remainders (3)',
      url: 'https://www.youtube.com/embed/M4TLHZkRaqw',
    },
    {
      title: 'Long Division With Remainders (5)',
      description: 'Long Division With Remainders (5)',
      url: 'https://www.youtube.com/embed/L4I-L0eYgAE',
    },
    {
      title: 'Long Division Made Easy',
      description: 'Long Division Made Easy - Examples With Large Numbers',
      url: 'https://www.youtube.com/embed/GiiuZ8sfw00',
    },
    {
      title: 'Dividing numbers',
      description: 'Dividing numbers: long division with remainders | Arithmetic | Khan Academy',
      url: 'https://www.youtube.com/embed/NcADzGz3bSI',
    },
    {
      title: 'Dividing by a two digit number',
      description: 'Dividing by a two digit number | Khan Academy',
      url: 'https://www.youtube.com/embed/cSTRd8WOpNE',
    },
    {
      title: 'Dividing number',
      description: 'Dividing numbers: long division example | 4th grade | Khan Academy',
      url: 'https://www.youtube.com/embed/HY-8ydAbiik', 
    },
    {
      title: 'Long division with decimals',
      description: 'Long division with decimals | Arithmetic operations | 5th grade | Khan Academy',
      url: 'https://www.youtube.com/embed/x48CYVaD0xE',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
