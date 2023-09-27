import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

@NgModule({
  imports: [MainRoutingModule, CommonModule, IonicModule, SharedModule],
  declarations: [HomeComponent, AboutUsComponent],
  exports: [HomeComponent, AboutUsComponent],
})
export class MainModule {}
