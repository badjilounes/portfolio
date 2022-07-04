import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { PwaService } from 'src/app/services/pwa/pwa.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
    );

  headings = [
    { title: 'about', icon: 'person', anchor: 'about', color: '#008073'},
    { title: 'experience', icon: 'trending_up', anchor: 'experience', color: '#00bcd4'},
    { title: 'projects', icon: 'web', anchor: 'projects', color: '#3f51b5'},
    { title: 'skills', icon: 'equalizer', anchor: 'skills', color: '#9c27b0'},
    { title: 'education', icon: 'school', anchor: 'education', color: '#ff9800'},
    { title: 'contact', icon: 'mail', anchor: 'contact', color: '#795548'}
  ];

  exportHeadings = [
    { title: 'resume', icon: 'description', link: 'assets/resume.pdf'}
  ];

  theme:  Observable<'dark' | 'light'>;

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly themeService: ThemeService,
    private readonly pwaService: PwaService
  ) {}

  ngOnInit() {
    this.theme = this.themeService.theme;
  }
}
