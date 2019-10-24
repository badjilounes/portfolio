import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() isHandset = false;
  
  contacts = [
    {iconName: 'mail', link: 'lounesbadji@gmail.com', mail: true},
    {iconName: 'github', link: 'https://github.com/badjilounes'},
    {iconName: 'linkedin', link: 'https://www.linkedin.com/in/lounes-badji-01b550104/'},
  ]

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => this.isHandset = result.matches);
  }

  ngOnInit() {
  }

}
