import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [
    {
      poster: 'assets/img/projects/blabla-movie.png', 
      name: 'Blabla movie', 
      description: ['Angular 6', 'Material', 'Rxjs debouncer', 'Open data api'],
      descriptionTxt: 'projects.description.blabla-movie',
      links: {online: 'http://blablamovie.herokuapp.com', github: 'https://www.github.com/badjilounes/blabla-movie.git'}
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
