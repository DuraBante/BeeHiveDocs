import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-a-procedure',
  templateUrl: './create-a-procedure.component.html',
  styleUrls: ['./create-a-procedure.component.scss']
})
export class CreateAProcedureComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["dashboard"]);
  }
  pageBackward(){
    this.router.navigate(["create-and-manage-items"]);
  }

}
