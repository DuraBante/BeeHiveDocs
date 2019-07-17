import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-a-hive',
  templateUrl: './select-a-hive.component.html',
  styleUrls: ['./select-a-hive.component.scss']
})
export class SelectAHiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["create-a-template"]);
  }
  pageBackward(){
    this.router.navigate(["edit-the-hive"]);
  }

}
