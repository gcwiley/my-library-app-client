import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// shared Components
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LogoComponent } from './logo/logo.component';
import { BannerComponent } from './banner/banner.component';
// add new shared components here

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    NavMenuComponent,
    LogoComponent,
    BannerComponent,
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
