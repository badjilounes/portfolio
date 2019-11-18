import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemeService {
  private _theme = new Subject<'light'|'dark'>();
  theme = this._theme.asObservable();

  constructor() {}

  setTheme(theme: 'dark'|'light'): void {
    this._theme.next(theme);
  }
}
