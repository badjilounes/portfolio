import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';

@Injectable()
export class PwaService {

  constructor(
    private readonly swUpdate: SwUpdate,
    private readonly snackBar: MatSnackBar,
    private readonly translateSrv: TranslateService
  ) {
    window.addEventListener('beforeinstallprompt', event => this.showInstallPwa(event));
    this.swUpdate.available.subscribe(() => this.showAskToUpdate());
  }

  showAskToUpdate(): void {
    forkJoin({
      message: this.translateSrv.get('pwa.reload'), 
      action: this.translateSrv.get('install')
    }).subscribe(
      (translations: {message: string; action: string}) => {
        let snackRef: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(translations.message, translations.action);
        snackRef.onAction().subscribe(() => window.location.reload());
      }
    );
  }

  showInstallPwa(event): void {
    forkJoin({
      message: this.translateSrv.get('pwa.install'), 
      action: this.translateSrv.get('install')
    }).subscribe(
      (translations: {message: string; action: string}) => {
        let snackRef: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(translations.message, translations.action);
        snackRef.onAction().subscribe(() => event.prompt());
      }
    );
  }
}