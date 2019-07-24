import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["removal-an-incorrectly-initiated-procedure"]);
  }
  pageBackward(){
    this.router.navigate(["catalog"]);
  }

}
