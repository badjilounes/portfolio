import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [
    {
      poster: 'assets/img/projects/dz-dialect-app.png',
      name: 'DZ Dialect App',
      description: ['Angular 14', 'Material', 'Ngrx', 'PWA'],
      descriptionTxt: 'projects.description.dz-dialect-app',
      links: {online: 'https://dz-dialect-app.herokuapp.com', github: 'https://www.github.com/badjilounes/dz-dialect-app.git'}
    },
    {
      poster: 'assets/img/projects/blabla-movie.png',
      name: 'Blabla movie',
      description: ['Angular 6', 'Material', 'Rxjs debouncer', 'Open data api'],
      descriptionTxt: 'projects.description.blabla-movie',
      links: {online: 'https://blablamovie.herokuapp.com', github: 'https://www.github.com/badjilounes/blabla-movie.git'}
    },
    {
      poster: 'assets/img/projects/prescriber.png',
      name: 'Prescriber',
      description: ['Angular 8', 'Material', 'NestJS', 'Swagger', 'JWT'],
      descriptionTxt: 'projects.description.prescriber',
      links: {online: 'https://prescriber-front.herokuapp.com', github: 'https://www.github.com/badjilounes/exo1.git'}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
