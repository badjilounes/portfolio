import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  constructor(private readonly themeService: ThemeService) { }

  ngOnInit() {
  }

  setTheme(theme: 'light'|'dark'): void {
    this.themeService.setTheme(theme);
  }

}
