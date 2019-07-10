import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { HeaderBarComponent } from './components/general/header-bar/header-bar.component';
import { BeeHiveComponentsModule } from './components/bee-hive-components/bee-hive-components.module';
import { MainMenuComponent } from './components/general/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoggingOnComponent } from './components/pages/logging-on/logging-on.component';
import { CreatingAHiveComponent } from './components/pages/creating-a-hive/creating-a-hive.component';
import { EditTheHiveComponent } from './components/pages/edit-the-hive/edit-the-hive.component';
import { SelectAHiveComponent } from './components/pages/select-a-hive/select-a-hive.component';
import { CreateATemplateComponent } from './components/pages/create-a-template/create-a-template.component';
import { CreateAndManageItemsComponent } from './components/pages/create-and-manage-items/create-and-manage-items.component';
import { CreateAProcedureComponent } from './components/pages/create-a-procedure/create-a-procedure.component';
import { ProcedureComponent } from './components/pages/procedure/procedure.component';
import { RemovalAnIncorrectlyInitiatedProcedureComponent } from './components/pages/removal-an-incorrectly-initiated-procedure/removal-an-incorrectly-initiated-procedure.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { SheetsComponent } from './components/pages/sheets/sheets.component';
import { KpiComponent } from './components/pages/kpi/kpi.component';
import { DataComponent } from './components/pages/data/data.component';
import { LoggingOutComponent } from './components/pages/logging-out/logging-out.component';
import { DefinitionsComponent } from './components/pages/definitions/definitions.component';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderBarComponent,
    MainMenuComponent,
    LoggingOnComponent,
    CreatingAHiveComponent,
    EditTheHiveComponent,
    SelectAHiveComponent,
    CreateATemplateComponent,
    CreateAndManageItemsComponent,
    CreateAProcedureComponent,
    ProcedureComponent,
    RemovalAnIncorrectlyInitiatedProcedureComponent,
    DashboardComponent,
    CatalogComponent,
    SheetsComponent,
    KpiComponent,
    DataComponent,
    LoggingOutComponent,
    DefinitionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeeHiveComponentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
