import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportFilesComponent } from './export-files/export-files.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [ExportFilesComponent, AdminDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminDashboardComponent],
})
export class AdminModule { }
