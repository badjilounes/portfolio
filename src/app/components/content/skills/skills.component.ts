import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  items = [
    {
      name: 'skills.front',
      skills: [
        {img: 'angular', name: 'Angular'},
        {img: 'ionic', name: 'Ionic'},
        {img: 'react', name: 'ReactJS'},
        {img: 'html5', name: 'HTML5'},
        {img: 'jquery', name: 'Jquery'},
      ]
    },
    {
      name: 'skills.css', 
      skills: [
        {img: 'css3', name: 'CSS3'},
        {img: 'sass', name: 'Sass'},
        {img: 'materialize', name: 'Materialize'},
        {img: 'bootstrap', name: 'Bootstrap'},
        {img: 'foundation', name: 'Foundation'},
      ]
    },
    {
      name: 'skills.back',
      skills: [
        {img: 'nodejs', name: 'Nodejs'},
        {img: 'mongodb', name: 'MongoDB'},
        {img: 'postgresql', name: 'PostreSQL'},
        {img: 'mysql', name: 'MySQL'}
      ]
    },
    {
      name: 'skills.build',
      skills: [
        {img: 'webpack', name: 'Webpack'},
        {img: 'gulp', name: 'Gulp'},
        {img: 'grunt', name: 'Grunt'},
        {img: 'bower', name: 'Bower'},
      ]
    },
    {
      name: 'skills.other',
      skills: [
        {img: 'github', name: 'GitHub'},
        {img: 'circleci', name: 'CircleCi'},
        {img: 'jenkins', name: 'Jenkins'},
        {img: 'heroku', name: 'Heroku'},
      ]
    }    
  ];

  constructor() { }

  ngOnInit() {
  }

}
