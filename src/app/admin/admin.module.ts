import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ExportFilesComponent } from './export-files/export-files.component';

@NgModule({
  declarations: [ExportFilesComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [AdminDashboardComponent],
})
export class AdminModule { }
