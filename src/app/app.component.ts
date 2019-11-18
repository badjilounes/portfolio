import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/languauge/language.service';
import { ThemeService } from './services/theme/theme.service';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @LocalStorage() appLang: 'fr-FR'|'en-US';

  title = 'portfolio';

  constructor(
    private readonly translateSrv: TranslateService, 
    private readonly langService: LanguageService,
  ) {
    
    this.translateSrv.setDefaultLang('fr');
    
    if (!!this.appLang) {
      this.langService.setLanguage(this.appLang)
    } else {
      this.setLangWithBrowserLang();
    }
  }

  ngOnInit() {}

  setLangWithBrowserLang(): void {
    const browserLang = navigator.language || navigator['userLanguage'];
    this.langService.setLanguage(browserLang);
  }
}
