import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  items = [
    {poster: 'assets/img/projects/blabla-movie.png', name: 'Blabla movie'},
    {poster: 'assets/img/projects/blabla-movie.png', name: 'Blabla movie'},
    {poster: 'assets/img/projects/blabla-movie.png', name: 'Blabla movie'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
