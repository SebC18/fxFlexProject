import { RouterModule } from '@angular/router';
import { HomeComponent } from './../../pages/home/home.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFullComponent } from './layout-full.component';



@NgModule({
  declarations: [LayoutFullComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutFullModule { }
