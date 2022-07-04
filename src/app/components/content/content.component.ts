import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  currentFragment = '';
  @Input() isHandset = false;

  constructor(private readonly router: Router) {}

  onSectionChange(fragment: string): void {
    this.currentFragment = fragment;
    this.router.navigate(['/'], {fragment});
  }
}
