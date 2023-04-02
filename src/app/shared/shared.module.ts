import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms

// import material module
import { MaterialModule } from '../material.module';

// shared Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LogoComponent } from './logo/logo.component';
// add new shared components here

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    NavMenuComponent,
    LogoComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    NavMenuComponent,
    LogoComponent,
  ],
})
export class SharedComponentsModule {}
