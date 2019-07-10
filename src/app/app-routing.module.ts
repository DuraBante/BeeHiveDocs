import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { LoggingOnComponent } from './components/pages/logging-on/logging-on.component';
import { CreatingAHiveComponent } from './components/pages/creating-a-hive/creating-a-hive.component';
import { EditTheHiveComponent } from './components/pages/edit-the-hive/edit-the-hive.component';
import { CreateAProcedureComponent } from './components/pages/create-a-procedure/create-a-procedure.component';
import { CreateAndManageItemsComponent } from './components/pages/create-and-manage-items/create-and-manage-items.component';
import { CreateATemplateComponent } from './components/pages/create-a-template/create-a-template.component';
import { SelectAHiveComponent } from './components/pages/select-a-hive/select-a-hive.component';
import { ProcedureComponent } from './components/pages/procedure/procedure.component';
import { RemovalAnIncorrectlyInitiatedProcedureComponent } from './components/pages/removal-an-incorrectly-initiated-procedure/removal-an-incorrectly-initiated-procedure.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { SheetsComponent } from './components/pages/sheets/sheets.component';
import { KpiComponent } from './components/pages/kpi/kpi.component';
import { DataComponent } from './components/pages/data/data.component';
import { LoggingOutComponent } from './components/pages/logging-out/logging-out.component';
import { DefinitionsComponent } from './components/pages/definitions/definitions.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: PageComponent},
  {path: 'logging-on', component: LoggingOnComponent},
  {path: 'creating-a-hive', component: CreatingAHiveComponent},
  {path: 'edit-the-hive', component: EditTheHiveComponent},
  {path: 'select-a-hive', component: SelectAHiveComponent},
  {path: 'create-a-template', component: CreateATemplateComponent},
  {path: 'create-and-manage-items', component: CreateAndManageItemsComponent},
  {path: 'create-a-procedure', component: CreateAProcedureComponent},
  {path: 'procedure', component: ProcedureComponent},
  {path: 'removal-an-incorrectly-initiated-procedure', component: RemovalAnIncorrectlyInitiatedProcedureComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'sheets', component: SheetsComponent},
  {path: 'kpi', component: KpiComponent},
  {path: 'data', component: DataComponent},
  {path: 'logging-out', component:LoggingOutComponent},
  {path: 'definitions', component: DefinitionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
