import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BackupComponent } from './backup/backup.component';
import { RestoreComponent } from './restore/restore.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventorytypeComponent } from './inventorytype/inventorytype.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductComponent } from './product/product.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportcustomerComponent } from './reportcustomer/reportcustomer.component';
import { ConfigurationtypeComponent } from './configurationtype/configurationtype.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SuppliertypeComponent } from './suppliertype/suppliertype.component';
import { SupplierComponent } from './supplier/supplier.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent}, 
  {path: 'dashboard', component: DashboardComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'backup', component: BackupComponent},
  {path: 'restore', component: RestoreComponent},
  {path: 'producttype', component:ProducttypeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'inventorytype', component: InventorytypeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productcategory', component: ProductcategoryComponent},
  {path: 'scheduling', component: SchedulingComponent},
  {path: 'inventorystocktakereport', component: ReportsComponent},
  {path: 'customerreport', component: ReportcustomerComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'configurationtype', component: ConfigurationtypeComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'suppliertype', component: SuppliertypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
