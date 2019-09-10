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
    ThemeSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
