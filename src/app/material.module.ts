import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

const modules = [
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatGridListModule,
  MatTooltipModule,
];

@NgModule({imports: modules, exports: modules})
export class MaterialModule { }