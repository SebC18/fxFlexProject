import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { RowExampleComponent } from './../../pages/row-example/row-example.component';
import { ColExampleComponent } from './../../pages/col-example/col-example.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSideComponent } from './layout-side.component';



@NgModule({
  declarations: [LayoutSideComponent, ColExampleComponent, RowExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class LayoutSideModule { }
