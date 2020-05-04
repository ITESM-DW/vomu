import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ExportFilesComponent } from './export-files/export-files.component';
import { GenericTableComponent } from './generic-table/generic-table.component';

@NgModule({
  declarations: [ExportFilesComponent, AdminDashboardComponent, GenericTableComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [AdminDashboardComponent],
})
export class AdminModule { }
