import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.page.html',
  styleUrls: ['./algebra.page.scss'],
})
export class AlgebraPage implements OnInit {

  videos = [
    {
      title: 'Introduction to algebra',
      description: 'What are variables, expressions, and equations? | Introduction to algebra | Algebra I | Khan Academy',
      url: 'https://www.youtube.com/embed/vDqOoI-4Z6M?list=PL7AF1C14AF1B05894',
    },
    {
      title: 'How to solve equations of the form ax = b',
      description: 'How to solve equations of the form ax = b | Linear equations | Algebra I | Khan Academy',
      url: 'https://www.youtube.com/embed/9Ek61w1LxSc?list=PL7AF1C14AF1B05894',
    },
    {
      title: 'Solving a more complicated equation',
      description: 'Solving a more complicated equation | Linear equations | Algebra I | Khan Academy',
      url: 'https://www.youtube.com/embed/XoEn1LfVoTo?list=PL7AF1C14AF1B05894',
    },
    {
      title: 'Introduction to solving an equation with variables on both sides',
      description: 'Introduction to solving an equation with variables on both sides | Algebra I | Khan Academy',
      url: 'https://www.youtube.com/embed/f15zA0PhSek?list=PL7AF1C14AF1B05894',
    },
    {
      title: 'Algebra: Linear equations 4',
      description: 'Algebra: Linear equations 4 | Linear equations | Algebra I | Khan Academy',
      url: 'https://www.youtube.com/embed/9IUEk9fn2Vs?list=PL7AF1C14AF1B05894',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
