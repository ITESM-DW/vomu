import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ExportFilesComponent } from './components/export-files/export-files.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';
import { UserService } from '../user/user.service';
import { AuthService } from '../user/auth.service';

@NgModule({
	declarations: [ExportFilesComponent, AdminDashboardComponent, GenericTableComponent],
	imports: [
		CommonModule,
		UserModule,
		AdminRoutingModule,
	],
	exports: [AdminDashboardComponent]
})
export class AdminModule { }
