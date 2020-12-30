import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigateDataService {

  
  private paramData:any
  private paramData1:any
  private paramData2:any
  private paramData3:any

  constructor() { }

  setParamData(data){
    this.paramData = data
  }

  getParamData(){
    return this.paramData
  }

  setParamData1(data){
    this.paramData1 = data
  }

  getParamData1(){
    return this.paramData1
  }

  setParamData2(data){
    this.paramData2 = data
  }

  getParamData2(){
    return this.paramData2
  }

  setParamData3(data){
    this.paramData3 = data
  }

  getParamData3(){
    return this.paramData3
  }
}
