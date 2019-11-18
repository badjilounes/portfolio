import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguageService {
  lang: BehaviorSubject<'fr-FR' | 'en-US'> = new BehaviorSubject<'fr-FR'>('fr-FR');

  constructor(
    private readonly translateSrv: TranslateService
  ) {}

  getLanguage(): Observable<'fr-FR'|'en-US'> {
    return this.lang.asObservable();
  }

  setLanguage(lang: 'fr-FR'|'en-US'): void {
    this.translateSrv.use(lang.split('-')[0]);
    this.lang.next(lang);
  }
}
