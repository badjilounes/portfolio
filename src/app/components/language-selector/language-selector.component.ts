import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/languauge/language.service';
import { LocalStorage } from 'src/app/services/local-storage/local-storage.decorator';


@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  @LocalStorage() appLang: 'fr-FR'|'en-US';

  constructor(private readonly translateSrv: TranslateService, private readonly langService: LanguageService) { }

  ngOnInit() {}

  setLanguage(lang: 'fr-FR'|'en-US'): void {
    this.appLang = lang;
    this.translateSrv.use(lang);
    this.langService.setLanguage(lang);
  }
}
