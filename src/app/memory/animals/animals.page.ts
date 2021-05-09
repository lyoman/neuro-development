import { GraphicsService } from './../../services/graphics.service';
import { Router } from '@angular/router';
import { NavigateDataService } from './../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {


  secondDiv = "false";
  thirdDiv = "false";
  firstDiv = "true";
  animals = [];

  newLevel = JSON.parse(localStorage.getItem('animalsnewLevel'));
  nextLevel = JSON.parse(localStorage.getItem('animalsnextLevel'));

  newArray = [];
  Kim = [];
  hideTop = "false";

  choosenNum: number;
  chooseColor: number;
  clickedNum = "false";

  numberOfColors = "false";

  showImage;
  showImage2;
  showImage3;
  showImage4;
  showImage5;
  showImage6;
  showImage7;
  showImage8;

  myButton;

  nextPage = [];

  solution = [
    './../../../assets/imgs/animals/1.png',
    './../../../assets/imgs/animals/2.png',
    './../../../assets/imgs/animals/3.png',
    './../../../assets/imgs/animals/4.png',
    './../../../assets/imgs/animals/5.png',
    './../../../assets/imgs/animals/6.png',
    './../../../assets/imgs/animals/7.png',
  ]
  solutionFinal = [];
  solutionFinalFinal = [];

  newColorArray = [];

  zvikoNum;

  constructor(
    private navData: NavigateDataService,
    private router: Router,
    private navCtrl: NavController,
    private graphicsService: GraphicsService,
    public alertController: AlertController,
  ) {
    this.showImage = true;
    this.showImage2 = false;
    this.showImage3 = false;
    this.showImage4 = false;
    this.showImage5 = false;
    this.showImage6 = false;
    this.showImage7 = false;
    this.showImage8 = false;
    this.myButton = false;
  }

  ngOnInit() {
    this.animals = this.shuffle1(this.graphicsService.animals);

    if (JSON.parse(localStorage.getItem('animalsinitialNum')) == null) {
      localStorage.setItem('animalsinitialNum', JSON.stringify(3));
      console.log(JSON.parse(localStorage.getItem('animalsinitialNum')))
    }

    if (JSON.parse(localStorage.getItem('animalsinitialNum')) == null) {
      localStorage.setItem('animalsinitialNum', JSON.stringify(3));
      console.log(JSON.parse(localStorage.getItem('animalsinitialNum')))
    }
    console.log("zvikoNum", JSON.parse(localStorage.getItem('animalsinitialNum')));
    if (JSON.parse(localStorage.getItem('animalsnextLevel')) > 4) {
      this.numberofSteps();
      this.solutionFun();
    }
  }



  myColors = [
    {
      "color": 3
    },
    {
      "color": 4
    },
    {
      "color": 5
    },
    {
      "color": 6
    },
    {
      "color": 7
    }
  ]

  myNumbers = [
    {
      "num": 7
    },
    {
      "num": 8
    },
    {
      "num": 9
    },
    {
      "num": 10
    },
    {
      "num": 11
    },
    {
      "num": 12
    },
    {
      "num": 13
    },
    {
      "num": 14
    },
    {
      "num": 15
    },
    {
      "num": 16
    },
    {
      "num": 17
    },
    {
      "num": 18
    },
    {
      "num": 19
    },
    {
      "num": 20
    },
    {
      "num": 21
    },
    {
      "num": 22
    },
    {
      "num": 23
    },
    {
      "num": 24
    },
    {
      "num": 25
    }
  ]

  numberofSteps() {
    console.log('num', JSON.parse(localStorage.getItem('animalsinitialNum')));
    this.hideTop = "true";
    this.numberOfColors = "true";
    if (JSON.parse(localStorage.getItem('animalsnextLevel')) > 4) {
      this.choosenNum = JSON.parse(localStorage.getItem("animalscNum"));
    }
    var realNum = (1000 * JSON.parse(localStorage.getItem('animalsinitialNum')))
    for (let i = 0; i < JSON.parse(localStorage.getItem('animalsinitialNum')); i++) {
      this.newArray.push(this.animals[i]);
    }
    if (JSON.parse(localStorage.getItem('animalsnextLevel')) < 4) {
      localStorage.setItem('animalscNum', JSON.stringify(this.choosenNum));
    }
    console.log('new array', this.newArray);
    // this.hidingDivs(realNum + 3000);
  }

  solutionFun() {
    this.clickedNum = "true";
    this.numberOfColors = "false";
    console.log("number of colors", this.chooseColor);
    if (JSON.parse(localStorage.getItem('animalsnextLevel')) > 4) {
      this.chooseColor = JSON.parse(localStorage.getItem('animalszColors'));
    }
    this.solutionFinal = this.shuffle1(this.solution);
    for (let i = 0; i < this.chooseColor; i++) {
      this.solutionFinalFinal.push(this.solutionFinal[i]);
    }
    if (JSON.parse(localStorage.getItem('animalsnextLevel')) < 4) {
      localStorage.setItem('animalszColors', JSON.stringify(this.chooseColor));
    }
    console.log('logic', this.solutionFinalFinal);
    localStorage.setItem("logic", JSON.stringify(this.solutionFinalFinal));
    this.cloneArray(JSON.parse(localStorage.getItem('animalsinitialNum')), this.solutionFinalFinal, this.newColorArray, this.Kim);
  }

  cloneArray(arrayLenth, imwe, newArray, Kim) {
    var pushArray = [];
    console.log("arrayLenth", arrayLenth);
    console.log("CLONE Array", newArray);
    while (newArray.length < arrayLenth) {
      pushArray = this.shuffle1(imwe);
      if (arrayLenth == 3) {
        var leon = [];
        // newArray = [];
        newArray.push(pushArray[0]);
        newArray.push(pushArray[0]);
        newArray.push(pushArray[0]);
        leon = newArray;
        // this.idontknow = newArray;
        // console.log("three elements", leon);
        localStorage.setItem("animalsarray3", JSON.stringify(leon));
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray3")));
      }

      if (arrayLenth == 5) {
        var leon = [];
        // this.idontknow = [];`
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray3")));
        leon = JSON.parse(localStorage.getItem("animalsarray3"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);
        console.log("no problem", newArray);
        localStorage.setItem("animalsarray5", JSON.stringify(newArray));
        console.log("array 5", JSON.parse(localStorage.getItem("animalsarray5")));
        // this.idontknow = leon;
      }

      if (arrayLenth == 7) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray5")));
        leon = JSON.parse(localStorage.getItem("animalsarray5"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray7", JSON.stringify(newArray));
        console.log("array 7", JSON.parse(localStorage.getItem("animalsarray7")));
      }

      if (arrayLenth == 8) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray7")));
        leon = JSON.parse(localStorage.getItem("animalsarray7"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray8", JSON.stringify(newArray));
        console.log("array 8", JSON.parse(localStorage.getItem("animalsarray8")));
      }

      if (arrayLenth == 9) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray7")));
        leon = JSON.parse(localStorage.getItem("animalsarray7"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray9", JSON.stringify(newArray));
        console.log("array 9", JSON.parse(localStorage.getItem("animalsarray9")));
      }

      if (arrayLenth == 10) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray9")));
        leon = JSON.parse(localStorage.getItem("animalsarray9"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray10", JSON.stringify(newArray));
        console.log("array 10", JSON.parse(localStorage.getItem("animalsarray10")));
      }

      if (arrayLenth == 11) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray9")));
        leon = JSON.parse(localStorage.getItem("animalsarray9"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray11", JSON.stringify(newArray));
        console.log("array 11", JSON.parse(localStorage.getItem("animalsarray11")));
      }

      if (arrayLenth == 12) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray11")));
        leon = JSON.parse(localStorage.getItem("animalsarray11"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray12", JSON.stringify(newArray));
        console.log("array 12", JSON.parse(localStorage.getItem("animalsarray12")));
      }

      if (arrayLenth == 13) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray11")));
        leon = JSON.parse(localStorage.getItem("animalsarray11"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray13", JSON.stringify(newArray));
        console.log("array 13", JSON.parse(localStorage.getItem("animalsarray13")));
      }

      if (arrayLenth == 14) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray13")));
        leon = JSON.parse(localStorage.getItem("animalsarray13"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray14", JSON.stringify(newArray));
        console.log("array 14", JSON.parse(localStorage.getItem("animalsarray14")));
      }

      if (arrayLenth == 15) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray13")));
        leon = JSON.parse(localStorage.getItem("animalsarray13"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray15", JSON.stringify(newArray));
        console.log("array 15", JSON.parse(localStorage.getItem("animalsarray15")));
      }

      if (arrayLenth == 16) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray15")));
        leon = JSON.parse(localStorage.getItem("animalsarray15"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray16", JSON.stringify(newArray));
        console.log("array 16", JSON.parse(localStorage.getItem("animalsarray16")));
      }

      if (arrayLenth == 17) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray15")));
        leon = JSON.parse(localStorage.getItem("animalsarray15"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray17", JSON.stringify(newArray));
        console.log("array 17", JSON.parse(localStorage.getItem("animalsarray17")));
      }

      if (arrayLenth == 18) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray17")));
        leon = JSON.parse(localStorage.getItem("animalsarray17"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray18", JSON.stringify(newArray));
        console.log("array 18", JSON.parse(localStorage.getItem("animalsarray18")));
      }

      if (arrayLenth == 19) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray17")));
        leon = JSON.parse(localStorage.getItem("animalsarray17"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray19", JSON.stringify(newArray));
        console.log("array 19", JSON.parse(localStorage.getItem("animalsarray19")));
      }

      if (arrayLenth == 20) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray19")));
        leon = JSON.parse(localStorage.getItem("animalsarray19"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray20", JSON.stringify(newArray));
        console.log("array 20", JSON.parse(localStorage.getItem("animalsarray20")));
      }

      if (arrayLenth == 21) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray19")));
        leon = JSON.parse(localStorage.getItem("animalsarray19"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray21", JSON.stringify(newArray));
        console.log("array 21", JSON.parse(localStorage.getItem("animalsarray21")));
      }

      if (arrayLenth == 22) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray21")));
        leon = JSON.parse(localStorage.getItem("animalsarray21"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray22", JSON.stringify(newArray));
        console.log("array 22", JSON.parse(localStorage.getItem("animalsarray22")));
      }

      if (arrayLenth == 23) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray21")));
        leon = JSON.parse(localStorage.getItem("animalsarray21"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray23", JSON.stringify(newArray));
        console.log("array 23", JSON.parse(localStorage.getItem("animalsarray23")));
      }

      if (arrayLenth == 24) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray23")));
        leon = JSON.parse(localStorage.getItem("animalsarray23"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray24", JSON.stringify(newArray));
        console.log("array 24", JSON.parse(localStorage.getItem("animalsarray24")));
      }

      if (arrayLenth == 25) {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animalsarray23")));
        leon = JSON.parse(localStorage.getItem("animalsarray23"));
        for (let i = 0; i < leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animalsarray25", JSON.stringify(newArray));
        console.log("array 25", JSON.parse(localStorage.getItem("animalsarray25")));
      }
    }

    for (let i = 0; i < arrayLenth; i++) {
      Kim.push(newArray[i]);
    }
    console.log("Final Final", Kim);
    localStorage.setItem("finalArray", Kim);
    var realNum = (1000 * JSON.parse(localStorage.getItem('animalsinitialNum')));
    this.hidingDivs(realNum + 3000);
  }


  hidingDivs(numSeconds) {
    setTimeout(() => {
      this.showImage = false;
      this.showImage2 = true;
    }, 4000);
    setTimeout(() => {
      this.showImage2 = false;
      this.showImage3 = true;
    }, 7000);
    setTimeout(() => {
      this.showImage3 = false;
      this.showImage4 = true;
    }, 10000);
    setTimeout(() => {
      this.showImage4 = false;
      this.showImage5 = true;
    }, 13000);
    setTimeout(() => {
      this.showImage5 = false;
      this.showImage6 = true;
    }, 16000);
    setTimeout(() => {
      this.showImage6 = false;
      this.showImage7 = true;
    }, 19000);
    setTimeout(() => {
      this.showImage7 = false;
      this.showImage8 = true;
    }, 22000);
    setTimeout(() => {
      this.showImage8 = false;
    }, 25000);
    setTimeout(() => {
      this.myButton = true;
    }, numSeconds);
  }



  shuffle(a) {
    let b, c, d;
    c = a.length;
    while (c) {
      b = Math.random() * c-- | 0;
      d = a[c];
      a[c] = a[b];
      a[b] = d;
    }
  }

  shuffle1(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  first(first) {
    this.firstDiv = first;
    this.secondDiv = "true";
  }

  second(second) {
    this.secondDiv = second;
    this.thirdDiv = "true";
  }

  choose(footprints) {
    this.navData.setParamData;
    // console.log('me', footprints);
    this.nextPage = footprints;
    localStorage.setItem('animalsuserList', JSON.stringify(this.nextPage));
    localStorage.setItem('animalsuserNum', JSON.stringify(this.choosenNum));
    console.log("animalsuserNum", this.choosenNum);
    // this.router.navigateByUrl('choose-correct');
    this.navCtrl.navigateRoot('/sequential/animals/choose-correct');
  }

  presentAlert4() {
    const alert = this.alertController.create({
      header: "Reset Game !!!!",
      subHeader: 'Are you sure you want to reset the game???',
      cssClass: 'custom-alertDanger',
      buttons: ['Dismiss']
    }).then(alert => alert.present());
  }

  presentAlertConfirm() {
    const alert = this.alertController.create({
      header: "Reset Game !!!!",
      subHeader: 'Are you sure you want to reset the game???',
      cssClass: 'custom-alertDanger',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            localStorage.clear();
            location.reload();
          }
        }
      ]
    }).then(alert => alert.present());
  }

}
