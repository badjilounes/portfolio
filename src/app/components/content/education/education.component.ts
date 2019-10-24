import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  items = [
    {title: 'education.engineer-school', location: 'education.engineer-location', descriptions: ['education.engineer-serie', 'education.engineer-speciality']},
    {title: 'education.prepa', location: 'education.prepa-location', descriptions: ['education.prepa-speciality']},
    {title: 'education.bac', location: 'education.highschool-location', descriptions: []},
  ]

  constructor() { }

  ngOnInit() {
  }

}
