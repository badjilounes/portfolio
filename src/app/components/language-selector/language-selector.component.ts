import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/languauge/language.service';


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private readonly translateSrv: TranslateService, private readonly langService: LanguageService) { }

  ngOnInit() {
  }

  setLanguage(lang: 'fr'|'en'): void {
    this.translateSrv.use(lang);
    const localeStr = (lang === 'fr') ? 'fr-FR' : 'en-US';
    this.langService.setLanguage(localeStr);
  }
}
