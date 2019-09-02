import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() sidenavToggled: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  toggleSidenav(): void {
    this.sidenavToggled.emit();
  }

}
