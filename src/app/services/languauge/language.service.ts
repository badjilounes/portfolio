import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LanguageService {
  lang: BehaviorSubject<'fr-FR' | 'en-US'> = new BehaviorSubject<'fr-FR'>('fr-FR');

  constructor() {}

  getLanguage(): Observable<'fr-FR'|'en-US'> {
    return this.lang.asObservable();
  }

  setLanguage(lang: 'fr-FR'|'en-US'): void {
    this.lang.next(lang);
  }
}
