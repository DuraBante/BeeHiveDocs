import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removal-an-incorrectly-initiated-procedure',
  templateUrl: './removal-an-incorrectly-initiated-procedure.component.html',
  styleUrls: ['./removal-an-incorrectly-initiated-procedure.component.scss']
})
export class RemovalAnIncorrectlyInitiatedProcedureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["sheets"]);
  }
  pageBackward(){
    this.router.navigate(["procedure"]);
  }
}
