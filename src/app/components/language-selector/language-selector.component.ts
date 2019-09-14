import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private readonly translateSrv: TranslateService) { }

  ngOnInit() {
  }

  setLanguage(lang: 'fr'|'en'): void {
    this.translateSrv.use(lang);
  }

}
