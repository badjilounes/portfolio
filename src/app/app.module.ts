import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/content/about/about.component';
import { AwardsComponent } from './components/content/awards/awards.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { EducationComponent } from './components/content/education/education.component';
import { ExperienceComponent } from './components/content/experience/experience.component';
import { HomeComponent } from './components/content/home/home.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { MaterialModule } from './material.module';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ThemeService } from './services/theme.service';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatIconRegistry, MatIconModule } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToolbarComponent,
    MenuComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    AwardsComponent,
    EducationComponent,
    ContactComponent,
    ScrollSpyDirective,
    ThemeSelectorComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
    MatIconModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    const linkedinIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/linkedin.svg');
    const githubIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/github.svg')
    matIconRegistry.addSvgIcon('linkedin', linkedinIcon);
    matIconRegistry.addSvgIcon('github', githubIcon);
  }
}
