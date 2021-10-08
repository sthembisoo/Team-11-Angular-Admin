import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { BoldReportViewerModule } from '@boldreports/angular-reporting-components';

// Report viewer
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';

// data-visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatashareService } from './datashare.service';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BackupComponent } from './backup/backup.component';
import { RestoreComponent } from './restore/restore.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductComponent } from './product/product.component';
import { ConfigurationtypeComponent } from './configurationtype/configurationtype.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventorytypeComponent } from './inventorytype/inventorytype.component';
import { SuppliertypeComponent } from './suppliertype/suppliertype.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddUpdateProducttypeComponent } from './producttype/add-update-producttype/add-update-producttype.component';
import { SearchfilterPipe } from './producttype/searchfilter.pipe';
import { SearchinventorytypePipe } from './inventorytype/searchinventorytype.pipe';
import { AddUpdateInventorytypeComponent } from './inventorytype/add-update-inventorytype/add-update-inventorytype.component';
import { AddUpdateInventoryComponent } from './inventory/add-update-inventory/add-update-inventory.component';
import { SearchinventoryPipe } from './inventory/searchinventory.pipe';
import { SearchcategoryPipe } from './productcategory/searchcategory.pipe';
import { AddUpdateProductcategoryComponent } from './productcategory/add-update-productcategory/add-update-productcategory.component';
import { SearchproductPipe } from './product/searchproduct.pipe';
import { AddUpdateProductComponent } from './product/add-update-product/add-update-product.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportcustomerComponent } from './reportcustomer/reportcustomer.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddconfigtypeComponent } from './configurationtype/addconfigtype/addconfigtype.component';
import { AddconfigurationComponent } from './configuration/addconfiguration/addconfiguration.component';
import { SearchconfigPipe } from './configuration/searchconfig.pipe';
import { AddupdateemployeeComponent } from './employee/addupdateemployee/addupdateemployee.component';
import { AddupdatesuppliertypeComponent } from './supplier/addupdatesuppliertype/addupdatesuppliertype.component';
import { SearchemployeePipe } from './employee/searchemployee.pipe';
import { SearchsupplierPipe } from './supplier/searchsupplier.pipe';
import { SearchsuppliertypePipe } from './suppliertype/searchsuppliertype.pipe';
import { AddupdatesupplierComponent } from './suppliertype/addupdatesupplier/addupdatesupplier.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AuthorizationComponent,
    BackupComponent,
    RestoreComponent,
    ProducttypeComponent,
    ProductcategoryComponent,
    ProductComponent,
    ConfigurationtypeComponent,
    InventoryComponent,
    InventorytypeComponent,
    SuppliertypeComponent,
    SupplierComponent,
    AddUpdateProducttypeComponent,
    SearchfilterPipe,
    SearchinventorytypePipe,
    AddUpdateInventorytypeComponent,
    AddUpdateInventoryComponent,
    SearchinventoryPipe,
    SearchcategoryPipe,
    AddUpdateProductcategoryComponent,
    SearchproductPipe,
    AddUpdateProductComponent,
    SchedulingComponent,
    ReportsComponent,
    ReportcustomerComponent,
    ConfigurationComponent,
    EmployeeComponent,
    AddconfigtypeComponent,
    AddconfigurationComponent,
    SearchconfigPipe,
    AddupdateemployeeComponent,
    AddupdatesuppliertypeComponent,
    SearchemployeePipe,
    SearchsupplierPipe,
    SearchsuppliertypePipe,
    AddupdatesupplierComponent,
  ],
  imports: [
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    BoldReportViewerModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [HttpClient, DatashareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
