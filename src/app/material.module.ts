import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatGridListModule,
  MatTooltipModule,
  MatButtonModule,
  MatSnackBarModule
];

@NgModule({imports: modules, exports: modules})
export class MaterialModule {}