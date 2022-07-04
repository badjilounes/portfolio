import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})
export class ThemeSelectorComponent implements OnInit {

  @LocalStorage() appTheme: 'dark'|'light';

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit() {
    if (!!this.appTheme) {
      this.setTheme(this.appTheme);
    }
  }

  setTheme(theme: 'light'|'dark'): void {
    this.appTheme = theme;
    this.themeService.setTheme(theme);
  }

}
