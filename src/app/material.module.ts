import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatGridListModule,
  MatTooltipModule,
  MatButtonModule
];

@NgModule({imports: modules, exports: modules})
export class MaterialModule { 
  
}