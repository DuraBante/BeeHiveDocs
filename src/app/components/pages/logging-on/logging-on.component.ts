import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logging-on',
  templateUrl: './logging-on.component.html',
  styleUrls: ['./logging-on.component.scss']
})
export class LoggingOnComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["definitions"]);
  }
  pageBackward(){
    this.router.navigate(["home"]);
  }

}
