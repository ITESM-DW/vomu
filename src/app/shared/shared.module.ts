import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [StatsComponent],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [StatsComponent],
})
export class SharedModule { }
