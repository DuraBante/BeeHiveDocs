import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-the-hive',
  templateUrl: './edit-the-hive.component.html',
  styleUrls: ['./edit-the-hive.component.scss']
})
export class EditTheHiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["select-a-hive"]);
  }
  pageBackward(){
    this.router.navigate(["creating-a-hive"]);
  }

}
