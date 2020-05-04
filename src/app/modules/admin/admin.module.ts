import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ExportFilesComponent } from './components/export-files/export-files.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

@NgModule({
	declarations: [ExportFilesComponent, AdminDashboardComponent, GenericTableComponent],
	imports: [
		CommonModule,
		SharedModule,
		AdminRoutingModule,
	],
	exports: [AdminDashboardComponent],
})
export class AdminModule { }
