import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

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
      tasks: ['experience.job.icoges.task1'],
      dates: {start: '', end: ''},
      location: ''
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
        'experience.job.mygladys.task4'
      ],
      dates: {start: '', end: ''},
      location: ''
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
      ],
      dates: {start: '', end: ''},
      location: ''
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
      ],
      dates: {start: '', end: ''},
      location: ''
    },
  ]

  constructor(private readonly breakpointObserver: BreakpointObserver) { }

  ngOnInit() {}

}
