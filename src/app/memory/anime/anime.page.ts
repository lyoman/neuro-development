import { GraphicsService } from './../../services/graphics.service';
import { Router } from '@angular/router';
import { NavigateDataService } from './../../services/navigate-data.service';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  secondDiv = "false";
  thirdDiv = "false";
  firstDiv = "true";
  footsteps = [];

  newLevel = JSON.parse(localStorage.getItem('animenewLevel'));
  nextLevel = JSON.parse(localStorage.getItem('animenextLevel'));

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
    './../../../assets/imgs/anime/1.png',
    './../../../assets/imgs/anime/2.png',
    './../../../assets/imgs/anime/3.png',
    './../../../assets/imgs/anime/4.png',
    './../../../assets/imgs/anime/5.png',
    './../../../assets/imgs/anime/6.png',
    './../../../assets/imgs/anime/7.png',
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
    this.footsteps = this.shuffle1(this.graphicsService.anime);
    if(JSON.parse(localStorage.getItem('animeinitialNum')) == null){
      localStorage.setItem('animeinitialNum', JSON.stringify(3));
      console.log(JSON.parse(localStorage.getItem('animeinitialNum')))
    }
    console.log("zvikoNum",  JSON.parse(localStorage.getItem('animeinitialNum')));

    if(JSON.parse(localStorage.getItem('animenextLevel')) > 4) {
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
    console.log('num', JSON.parse(localStorage.getItem('animeinitialNum')));
    this.hideTop = "true";
    this.numberOfColors = "true";
    if (JSON.parse(localStorage.getItem('animenextLevel')) > 4){
      this.choosenNum = JSON.parse(localStorage.getItem("animecNum"));
    }
    var realNum = (1000 * JSON.parse(localStorage.getItem('animeinitialNum')))
    for (let i = 0; i < JSON.parse(localStorage.getItem('animeinitialNum')); i++) {
      this.newArray.push(this.footsteps[i]);
    }
    if (JSON.parse(localStorage.getItem('animenextLevel')) < 4){
      localStorage.setItem('animecNum', JSON.stringify(this.choosenNum));
    }
    console.log('new array', this.newArray);
    // this.hidingDivs(realNum + 3000);
  }

  solutionFun() {
    this.clickedNum = "true";
    this.numberOfColors = "false";
    console.log("number of colors", this.chooseColor);
    if(JSON.parse(localStorage.getItem('animenextLevel')) > 4){
      this.chooseColor = JSON.parse(localStorage.getItem('animezColors'));
    }
    console.log("number of colors", this.chooseColor);
    // this.solutionFinal = this.shuffle1(this.solution);
    this.solutionFinal = this.solution;
    for (let i = 0; i < this.chooseColor; i++) {
      this.solutionFinalFinal.push(this.solutionFinal[i]);
    }
    if (JSON.parse(localStorage.getItem('animenextLevel')) < 4){
      localStorage.setItem('animezColors', JSON.stringify(this.chooseColor));
    }
    console.log('animelogic', this.solutionFinalFinal);
    localStorage.setItem("animelogic", JSON.stringify(this.solutionFinalFinal));
    this.cloneArray(JSON.parse(localStorage.getItem('animeinitialNum')), this.solutionFinalFinal, this.newColorArray, this.Kim);
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
        localStorage.setItem("animearray3", JSON.stringify(leon));
        console.log("leo", JSON.parse(localStorage.getItem("animearray3")));
      }

      if(arrayLenth == 5){
        var leon = [];
        // this.idontknow = [];`
        console.log("leo", JSON.parse(localStorage.getItem("animearray3")));
        leon = JSON.parse(localStorage.getItem("animearray3"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);
        console.log("no problem", newArray);
        localStorage.setItem("animearray5", JSON.stringify(newArray));
        console.log("array 5", JSON.parse(localStorage.getItem("animearray5")));
        // this.idontknow = leon;
      }

      if(arrayLenth == 7)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray5")));
        leon = JSON.parse(localStorage.getItem("animearray5"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray7", JSON.stringify(newArray));
        console.log("array 7", JSON.parse(localStorage.getItem("animearray7")));
      }

      if(arrayLenth == 8)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray7")));
        leon = JSON.parse(localStorage.getItem("animearray7"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray8", JSON.stringify(newArray));
        console.log("array 8", JSON.parse(localStorage.getItem("animearray8")));
      }

      if(arrayLenth == 9)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray7")));
        leon = JSON.parse(localStorage.getItem("animearray7"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray9", JSON.stringify(newArray));
        console.log("array 9", JSON.parse(localStorage.getItem("animearray9")));
      }

      if(arrayLenth == 10)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray9")));
        leon = JSON.parse(localStorage.getItem("animearray9"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray10", JSON.stringify(newArray));
        console.log("array 10", JSON.parse(localStorage.getItem("animearray10")));
      }

      if(arrayLenth == 11)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray9")));
        leon = JSON.parse(localStorage.getItem("animearray9"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray11", JSON.stringify(newArray));
        console.log("array 11", JSON.parse(localStorage.getItem("animearray11")));
      }

      if(arrayLenth == 12)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray11")));
        leon = JSON.parse(localStorage.getItem("animearray11"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray12", JSON.stringify(newArray));
        console.log("array 12", JSON.parse(localStorage.getItem("animearray12")));
      }

      if(arrayLenth == 13)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray11")));
        leon = JSON.parse(localStorage.getItem("animearray11"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray13", JSON.stringify(newArray));
        console.log("array 13", JSON.parse(localStorage.getItem("animearray13")));
      }

      if(arrayLenth == 14)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray13")));
        leon = JSON.parse(localStorage.getItem("animearray13"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray14", JSON.stringify(newArray));
        console.log("array 14", JSON.parse(localStorage.getItem("animearray14")));
      }

      if(arrayLenth == 15)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray13")));
        leon = JSON.parse(localStorage.getItem("animearray13"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray15", JSON.stringify(newArray));
        console.log("array 15", JSON.parse(localStorage.getItem("animearray15")));
      }

      if(arrayLenth == 16)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray15")));
        leon = JSON.parse(localStorage.getItem("animearray15"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray16", JSON.stringify(newArray));
        console.log("array 16", JSON.parse(localStorage.getItem("animearray16")));
      }

      if(arrayLenth == 17)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray15")));
        leon = JSON.parse(localStorage.getItem("animearray15"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray17", JSON.stringify(newArray));
        console.log("array 17", JSON.parse(localStorage.getItem("animearray17")));
      }

      if(arrayLenth == 18)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray17")));
        leon = JSON.parse(localStorage.getItem("animearray17"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray18", JSON.stringify(newArray));
        console.log("array 18", JSON.parse(localStorage.getItem("animearray18")));
      }

      if(arrayLenth == 19)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray17")));
        leon = JSON.parse(localStorage.getItem("animearray17"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[0]);
        newArray.push(pushArray[2]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray19", JSON.stringify(newArray));
        console.log("array 19", JSON.parse(localStorage.getItem("animearray19")));
      }

      if(arrayLenth == 20)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray19")));
        leon = JSON.parse(localStorage.getItem("animearray19"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray20", JSON.stringify(newArray));
        console.log("array 20", JSON.parse(localStorage.getItem("animearray20")));
      }

      if(arrayLenth == 21)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray19")));
        leon = JSON.parse(localStorage.getItem("animearray19"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[1]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray21", JSON.stringify(newArray));
        console.log("array 21", JSON.parse(localStorage.getItem("animearray21")));
      }

      if(arrayLenth == 22)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray21")));
        leon = JSON.parse(localStorage.getItem("animearray21"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        // newArray.push(pushArray[1]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray22", JSON.stringify(newArray));
        console.log("array 22", JSON.parse(localStorage.getItem("animearray22")));
      }

      if(arrayLenth == 23)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray21")));
        leon = JSON.parse(localStorage.getItem("animearray21"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray23", JSON.stringify(newArray));
        console.log("array 23", JSON.parse(localStorage.getItem("animearray23")));
      }

      if(arrayLenth == 24)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray23")));
        leon = JSON.parse(localStorage.getItem("animearray23"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[1]);
        // newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray24", JSON.stringify(newArray));
        console.log("array 24", JSON.parse(localStorage.getItem("animearray24")));
      }

      if(arrayLenth == 25)    {
        var leon = [];
        console.log("leo", JSON.parse(localStorage.getItem("animearray23")));
        leon = JSON.parse(localStorage.getItem("animearray23"));
        for (let i=0; i<leon.length; i++) {
          newArray.push(leon[i]);
        }
        newArray.push(pushArray[2]);
        newArray.push(pushArray[0]);

        console.log("no problem", newArray);
        localStorage.setItem("animearray25", JSON.stringify(newArray));
        console.log("array 25", JSON.parse(localStorage.getItem("animearray25")));
      }
    }

    for (let i = 0; i < arrayLenth; i++) {
      Kim.push(newArray[i]);
    }
    console.log("Final Final", Kim);
    localStorage.setItem("finalArray", Kim);
    var realNum = (1000 * JSON.parse(localStorage.getItem('animeinitialNum')));
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

  choose(anime) {
    this.navData.setParamData;
    // console.log('me', anime);
    this.nextPage = anime;
    localStorage.setItem('animeuserList', JSON.stringify(this.nextPage));
    localStorage.setItem('animeuserNum', JSON.stringify(this.choosenNum));
    console.log("animeuserNum", this.choosenNum);
    // this.router.navigateByUrl('choose-correct');
    this.navCtrl.navigateRoot('/sequential/anime/choose-correct');
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
