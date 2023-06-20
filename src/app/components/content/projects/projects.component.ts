import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [
    {
      poster: 'assets/img/projects/dz-dialect.png',
      name: 'DZ Dialect App',
      description: ['Angular 15', 'Material', 'RXJS', 'NGRX', 'JWT', 'NestJS', 'DDD', 'TDD', 'Swagger', 'Social login'],
      descriptionTxt: 'projects.description.dz-dialect',
      links: { online: 'https://dz-dialect.bdsapp.fr', github: 'https://github.com/badjilounes/dz-dialect-app' }
    },
    {
      poster: 'assets/img/projects/blabla-movie.png',
      name: 'Blabla movie',
      description: ['Angular 6', 'Material', 'Rxjs debouncer', 'Open data api'],
      descriptionTxt: 'projects.description.blabla-movie',
      links: { github: 'https://www.github.com/badjilounes/blabla-movie.git' }
    },
    {
      poster: 'assets/img/projects/prescriber.png',
      name: 'Prescriber',
      description: ['Angular 8', 'Material', 'NestJS', 'Swagger', 'JWT'],
      descriptionTxt: 'projects.description.prescriber',
      links: { github: 'https://www.github.com/badjilounes/exo1.git' }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
