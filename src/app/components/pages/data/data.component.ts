import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["log-out"]);
  }
  pageBackward(){
    this.router.navigate(["kpi"]);
  }

}
