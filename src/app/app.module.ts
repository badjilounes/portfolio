import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/content/about/about.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ContentComponent } from './components/content/content.component';
import { EducationComponent } from './components/content/education/education.component';
import { ExperienceComponent } from './components/content/experience/experience.component';
import { HomeComponent } from './components/content/home/home.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { SkillsComponent } from './components/content/skills/skills.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { MaterialModule } from './material.module';
import { ThemeService } from './services/theme/theme.service';
import { LanguageService } from './services/languauge/language.service';

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
    EducationComponent,
    ContactComponent,
    ScrollSpyDirective,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
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
  providers: [
    ThemeService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    const linkedinIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/linkedin.svg');
    const githubIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/github.svg');
    const mailIcon = domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi-icons/mail.svg');
    matIconRegistry.addSvgIcon('mail', mailIcon);
    matIconRegistry.addSvgIcon('linkedin', linkedinIcon);
    matIconRegistry.addSvgIcon('github', githubIcon);
    registerLocaleData(localeFr);
  }
}
