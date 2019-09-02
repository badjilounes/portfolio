import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
    );

  headings = [
    { title: 'about', icon: 'person', anchor: 'about', color: '#008073'},
    { title: 'experience', icon: 'trending_up', anchor: 'experience', color: '#00bcd4'},
    { title: 'projects', icon: 'web', anchor: 'projects', color: '#3f51b5'},
    { title: 'skills', icon: 'equalizer', anchor: 'skills', color: '#9c27b0'},
    { title: 'awards', icon: 'star', anchor: 'awards', color: '#F44336'},
    { title: 'education', icon: 'school', anchor: 'education', color: '#ff9800'},
    { title: 'contact', icon: 'mail', anchor: 'contact', color: '#795548'},
    { title: 'resume', icon: 'description', anchor: '', color: '#424242'}
  ];

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

}
