import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creating-a-hive',
  templateUrl: './creating-a-hive.component.html',
  styleUrls: ['./creating-a-hive.component.scss']
})
export class CreatingAHiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["edit-the-hive"]);
  }
  pageBackward(){
    this.router.navigate(["definitions"]);
  }

}
