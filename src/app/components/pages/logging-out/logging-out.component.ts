import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging-out',
  templateUrl: './logging-out.component.html',
  styleUrls: ['./logging-out.component.scss']
})
export class LoggingOutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["home"]);
  }
  pageBackward(){
    this.router.navigate(["data"]);
  }

}
