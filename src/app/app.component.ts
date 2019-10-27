import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/languauge/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private readonly translateSrv: TranslateService, private readonly langService: LanguageService) {
    this.translateSrv.setDefaultLang('fr');
    this.setLangWithBrowserLang();
  }

  setLangWithBrowserLang(): void {
    const browserLang = navigator.language || navigator['userLanguage'];
    const lang = (browserLang === 'fr-FR') ? 'fr' : 'en';
    this.translateSrv.use(lang);
    const localeStr = (lang === 'fr') ? 'fr-FR' : 'en-US';
    this.langService.setLanguage(localeStr);
  }
}
