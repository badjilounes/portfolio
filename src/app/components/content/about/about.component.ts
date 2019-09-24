import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  link1 = 'https://www.smashingmagazine.com/2016/10/inclusive-design-patterns/';
  link2 = 'https://www.angular.io/';
  link3 = 'https://mrmrs.cc/writing/scalable-css/';

  constructor() { }

  ngOnInit() {
  }

}


