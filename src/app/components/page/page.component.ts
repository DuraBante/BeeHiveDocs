import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private router: Router) { }

// Comment
  ngOnInit() {
  }
gotoCatalog(){
  this.router.navigate(["catalog"]);
}
gotoCreateProcedure(){
  this.router.navigate(["create-a-procedure"]);
}
gotoCreateTemplate(){
  this.router.navigate(["create-a-template"]);
}
gotoCreateItem(){
  this.router.navigate(["create-items"]);
}
gotoCreateHive(){
  this.router.navigate(["creating-a-hive"]);
}
gotoDashboard(){
  this.router.navigate(["dashboard"]);
}
gotoData(){
  this.router.navigate(["data"]);
}
gotoDefinition(){
  this.router.navigate(["definitions"]);
}
gotoEditHive(){
  this.router.navigate(["edit-the-hive"]);
}
gotoKPI(){
  this.router.navigate(["kpi"]);
}
gotoLoggingOn(){
  this.router.navigate(["log-on"]);
}
gotoLoggingOut(){
  this.router.navigate(["log-out"]);
}
gotoProcedure(){
  this.router.navigate(["procedure"]);
}
gotoRemoveProcedure(){
  this.router.navigate(["remove-a-procedure"]);
}
gotoSelectHive(){
  this.router.navigate(["select-a-hive"]);
}
gotoSheets(){
  this.router.navigate(["sheets"]);
}

}
