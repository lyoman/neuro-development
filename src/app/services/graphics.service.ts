import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  footsteps = [
    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
    './../../../assets/imgs/graphics/5.png',
    './../../../assets/imgs/graphics/6.png',
    './../../../assets/imgs/graphics/7.png',
  ];

  animals = [
    './../../../assets/imgs/animals/1.png',
    './../../../assets/imgs/animals/2.png',
    './../../../assets/imgs/animals/3.png',
    './../../../assets/imgs/animals/4.png',
    './../../../assets/imgs/animals/5.png',
    './../../../assets/imgs/animals/6.png',
    './../../../assets/imgs/animals/7.png',
  ];

  anime = [
    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
    './../../../assets/imgs/anime/5.png',
    './../../../assets/imgs/anime/6.png',
    './../../../assets/imgs/anime/7.png',
  ];

  math = [
    './../../../assets/imgs/math/1.png',
    './../../../assets/imgs/math/2.png',
    './../../../assets/imgs/math/3.png',
    './../../../assets/imgs/math/4.png',
    './../../../assets/imgs/math/5.png',
    './../../../assets/imgs/math/6.png',
    './../../../assets/imgs/math/7.png',
  ];

  constructor() { }
}
