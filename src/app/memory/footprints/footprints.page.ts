import { GraphicsService } from './../../services/graphics.service';
import { Router } from '@angular/router';
import { NavigateDataService } from './../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footprints',
  templateUrl: './footprints.page.html',
  styleUrls: ['./footprints.page.scss'],
})
export class FootprintsPage implements OnInit {

  secondDiv = "false";
  thirdDiv = "false";
  firstDiv = "true";
  footsteps = [];

  newLevel = JSON.parse(localStorage.getItem('newLevel'));
  nextLevel = JSON.parse(localStorage.getItem('nextLevel'));

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
    './../../../assets/imgs/graphics/1.png',
    './../../../assets/imgs/graphics/2.png',
    './../../../assets/imgs/graphics/3.png',
    './../../../assets/imgs/graphics/4.png',
    './../../../assets/imgs/graphics/5.png',
    './../../../assets/imgs/graphics/6.png',
    './../../../assets/imgs/graphics/7.png',
  ]
  solutionFinal = [];
  solutionFinalFinal = [];

  newColorArray = [];

  stepNum5 = [];
  idontknow = [];

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
    this.footsteps = this.shuffle1(this.graphicsService.footsteps);

    if(JSON.parse(localStorage.getItem('initialNum')) == null){
      localStorage.setItem('initialNum', JSON.stringify(3));
      console.log(JSON.parse(localStorage.getItem('initialNum')));
    }
    console.log("zvikoNum",  JSON.parse(localStorage.getItem('initialNum')));

    if(JSON.parse(localStorage.getItem('nextLevel')) > 4) {
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
    console.log('num', JSON.parse(localStorage.getItem('initialNum')));
    this.hideTop = "true";
    this.numberOfColors = "true";
    if (JSON.parse(localStorage.getItem('nextLevel')) > 4){
      this.choosenNum = JSON.parse(localStorage.getItem("cNum"));
    }
    var realNum = (1000 * JSON.parse(localStorage.getItem('initialNum')))
    for (let i = 0; i < JSON.parse(localStorage.getItem('initialNum')); i++) {
      this.newArray.push(this.footsteps[i]);
    }
    if (JSON.parse(localStorage.getItem('nextLevel')) < 4){
      localStorage.setItem('cNum', JSON.stringify(this.choosenNum));
    }
    console.log('new array', this.newArray);
  }

  solutionFun() {
    this.clickedNum = "true";
    this.numberOfColors = "false";
    if(JSON.parse(localStorage.getItem('nextLevel')) > 4){
      this.chooseColor = JSON.parse(localStorage.getItem('zColors'));
    }
    console.log("number of colors", this.chooseColor);
    this.solutionFinal = this.solution;
    for (let i = 0; i < this.chooseColor; i++) {
      this.solutionFinalFinal.push(this.solutionFinal[i]);
    }
    if (JSON.parse(localStorage.getItem('nextLevel')) < 4){
      localStorage.setItem('zColors', JSON.stringify(this.chooseColor));
    }
    console.log('logic', this.solutionFinalFinal);
    // if (JSON.parse(localStorage.getItem('initialNum')) < JSON.parse(localStorage.getItem('nextLevel'))) {
      localStorage.setItem("logic", JSON.stringify(this.solutionFinalFinal));
    // }
    this.cloneArray(JSON.parse(localStorage.getItem('initialNum')), this.solutionFinalFinal, this.newColorArray, this.Kim);
  }

  cloneArray(arrayLenth, imwe, newArray, Kim) {
    var pushArray = [];
    console.log("arrayLenth", arrayLenth);
    console.log("CLONE Array", newArray);
    while (newArray.length < arrayLenth) {
      pushArray = this.shuffle1(imwe);

      if(arrayLenth == 3){
        var leon = [];
        // newArray = [];
        newArray.push(pushArray[0]);
        newArray.push(pushArray[0]);
        newArray.push(pushArray[0]);
        leon = newArray;
        // this.idontknow = newArray;
        // console.log("three elements", leon);
        localStorage.setItem("array3", JSON.stringify(leon));
        console.log("leo", JSON.parse(localStorage.getItem("array3")));
      }
      if(arrayLenth == 5){
        var leon = [];
        // this.idontknow = [];`
        console.log("leo", JSON.parse(localStorage.getItem("array3")));
        leon = JSON.parse(localStorage.getItem("array3"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[0]);
        // newArray.push(pushArray[0]);
        // newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);
        // leon.push(pushArray[2]);
        // leon.push(pushArray[1]);
        // leon.concat(leon);
        console.log("no problem", newArray);
        localStorage.setItem("array5", JSON.stringify(newArray));
        console.log("array 5", JSON.parse(localStorage.getItem("array5")));
        // this.idontknow = leon;
      }
      if(arrayLenth == 7)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array5")));
        leon = JSON.parse(localStorage.getItem("array5"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("array7", JSON.stringify(newArray));
        console.log("array 7", JSON.parse(localStorage.getItem("array7")));
      }

      if(arrayLenth == 9)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array7")));
        leon = JSON.parse(localStorage.getItem("array7"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("array9", JSON.stringify(newArray));
        console.log("array 9", JSON.parse(localStorage.getItem("array9")));
      }

      if(arrayLenth == 11)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array9")));
        leon = JSON.parse(localStorage.getItem("array9"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("array11", JSON.stringify(newArray));
        console.log("array 11", JSON.parse(localStorage.getItem("array11")));
      }

      if(arrayLenth == 13)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array11")));
        leon = JSON.parse(localStorage.getItem("array11"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("array13", JSON.stringify(newArray));
        console.log("array 13", JSON.parse(localStorage.getItem("array13")));
      }

      if(arrayLenth == 15)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array13")));
        leon = JSON.parse(localStorage.getItem("array13"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("array15", JSON.stringify(newArray));
        console.log("array 15", JSON.parse(localStorage.getItem("array15")));
      }

      if(arrayLenth == 17)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array15")));
        leon = JSON.parse(localStorage.getItem("array15"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("array17", JSON.stringify(newArray));
        console.log("array 17", JSON.parse(localStorage.getItem("array17")));
      }

      if(arrayLenth == 19)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array17")));
        leon = JSON.parse(localStorage.getItem("array17"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("array19", JSON.stringify(newArray));
        console.log("array 19", JSON.parse(localStorage.getItem("array19")));
      }

      if(arrayLenth == 21)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array19")));
        leon = JSON.parse(localStorage.getItem("array19"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("array21", JSON.stringify(newArray));
        console.log("array 21", JSON.parse(localStorage.getItem("array21")));
      }

      if(arrayLenth == 23)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array21")));
        leon = JSON.parse(localStorage.getItem("array21"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("array23", JSON.stringify(newArray));
        console.log("array 23", JSON.parse(localStorage.getItem("array23")));
      }

      if(arrayLenth == 25)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("array23")));
        leon = JSON.parse(localStorage.getItem("array23"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("array25", JSON.stringify(newArray));
        console.log("array 25", JSON.parse(localStorage.getItem("array25")));
      }
    }

    for (let i = 0; i < arrayLenth; i++) {
      Kim.push(newArray[i]);
      // console.log("hameno", )
    }
    // Kim = newArray;

    // if (arrayLenth == 5){
    //   localStorage.setItem("stepNum5", JSON.stringify(Kim));
    // }
    console.log("Final Final", Kim);
    console.log("Final again", newArray);
    localStorage.setItem("finalArray", Kim);
    var realNum = (1000 * JSON.parse(localStorage.getItem('initialNum')));
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
    localStorage.setItem('userList', JSON.stringify(this.nextPage));
    localStorage.setItem('userNum', JSON.stringify(this.choosenNum));
    console.log("userNum", this.choosenNum);
    // this.router.navigateByUrl('choose-correct');
    this.navCtrl.navigateRoot('/sequential/footprints/choose-correct');
  }

  presentAlert4() {
    const alert = this.alertController.create({
    header: "Reset Game !!!!",
    subHeader: 'Are you sure you want to reset the game???',
    cssClass: 'custom-alertDanger',
    buttons: ['Dismiss']}).then(alert=> alert.present());
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
    }).then(alert=> alert.present());
  }

  // resetGame() {
  //   localStorage.clear();
  //   location.reload();
  // }

}
