import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-a-template',
  templateUrl: './create-a-template.component.html',
  styleUrls: ['./create-a-template.component.scss']
})
export class CreateATemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["create-items"]);
  }
  pageBackward(){
    this.router.navigate(["select-a-hive"]);
  }

}
