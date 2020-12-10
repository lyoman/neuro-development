import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-algebra',
  templateUrl: './view-algebra.page.html',
  styleUrls: ['./view-algebra.page.scss'],
})
export class ViewAlgebraPage implements OnInit {

  title = this.route.snapshot.paramMap.get('title');
  description = this.route.snapshot.paramMap.get('description');
  // url = this.route.snapshot.paramMap.get('url');
  url: any;

  constructor(
    private route: ActivatedRoute,
    private dom:DomSanitizer
  ) { 
    const url = this.dom.bypassSecurityTrustResourceUrl(this.route.snapshot.paramMap.get('url')); 
    this.url = url;
  }

  ngOnInit() {
    // console.log('my url', this.url);
    // this.dom.bypassSecurityTrustResourceUrl(this.url); 
  }

}
