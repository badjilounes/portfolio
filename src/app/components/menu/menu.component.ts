import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() links = [];
  @Input() exportLinks = [];
  @Input() isHandset = false;

  selected: Observable<string>;

  constructor(private readonly route: ActivatedRoute) { 
    this.selected = this.route.fragment;
  }

  ngOnInit() {
  }
}
