import { Component, OnInit } from '@angular/core';
import { Character } from './character';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  jcLife: number;

  constructor() { }

  ngOnInit() {
    let alexis: Character = new Character();
    let jc: Character = new Character();
    alexis.weapon_damage = 50;
    alexis.attack(jc);
    this.jcLife = jc.life;
  }

}
