import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { LanguageService } from 'src/app/services/languauge/language.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  items = [
    {
      companyName: 'Icoges', 
      logo: 'icoges', 
      job: 'experience.job.icoges',
      companyDescription: 'experience.job.icoges.description',
      tasks: [
        'experience.job.icoges.task1',
        'experience.job.icoges.task2'
      ],
      dates: {start: '1540573611000', end: '1574788011000'},
      location: 'Lyon'
    },
    {
      companyName: 'MyGladys', 
      logo: 'mygladys', 
      job: 'experience.job.mygladys',
      companyDescription: 'experience.job.mygladys.description',
      tasks: [
        'experience.job.mygladys.task1',
        'experience.job.mygladys.task2',
        'experience.job.mygladys.task3',
        'experience.job.mygladys.task4',
        'experience.job.mygladys.task5',
        'experience.job.mygladys.task6',
        'experience.job.mygladys.task7',
        'experience.job.mygladys.task8',
        'experience.job.mygladys.task9',
      ],
      dates: {start: '1545844011000', end: '1564160811000'},
      location: 'Lyon'
    },
    {
      companyName: 'Silk-digital', 
      logo: 'ubilab', 
      job: 'experience.job.ubilab',
      companyDescription: 'experience.job.ubilab.description',
      tasks: [
        'experience.job.ubilab.task1',
        'experience.job.ubilab.task2',
        'experience.job.ubilab.task3',
        'experience.job.ubilab.task4',
        'experience.job.ubilab.task5',
        'experience.job.ubilab.task6',
        'experience.job.ubilab.task7',
        'experience.job.ubilab.task8',
        'experience.job.ubilab.task9',
        'experience.job.ubilab.task10',
      ],
      dates: {start: '1474909611000', end: '1545844011000'},
      location: 'Lyon'
    },
    {
      companyName: 'TrainMe', 
      logo: 'trainme', 
      job: 'experience.job.trainme',
      companyDescription: 'experience.job.trainme.description',
      tasks: [
        'experience.job.trainme.task1',
        'experience.job.trainme.task2',
        'experience.job.trainme.task3',
        'experience.job.trainme.task4',
        'experience.job.trainme.task5',
        'experience.job.trainme.task6',
        'experience.job.trainme.task7',
      ],
      dates: {start: '1456506411000', end: '1469552811000'},
      location: 'Lyon'
    },
  ];

  locale: Observable<'fr-FR'|'en-US'> = this.langSrv.getLanguage();

  constructor(private readonly breakpointObserver: BreakpointObserver, private readonly langSrv: LanguageService) { }

  ngOnInit() {}

}
