import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  currentFragment = '';

  constructor(private readonly router: Router, private readonly route: ActivatedRoute) {
    this.route.fragment.subscribe(fragment => this.onUriChange(fragment));
  }

  onSectionChange(fragment: string): void {
    this.currentFragment = fragment;
    this.router.navigate(['/'], {fragment});
    console.log('navigating')
  }

  onUriChange(fragment: string): void {
    // console.log('new fragment :', fragment);
    // console.log('current fragment :', this.currentFragment);

    // if (this.currentFragment !== fragment) {
    //   this.currentFragment = fragment;
    //   const element: HTMLElement = document.getElementById(fragment) as HTMLElement;
    //   console.log(element);
    //   if (!!element) {
    //     element.scrollIntoView();
    //   }
    // }
    
  }

}
