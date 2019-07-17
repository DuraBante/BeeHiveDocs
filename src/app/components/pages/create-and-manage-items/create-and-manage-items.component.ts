import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-and-manage-items',
  templateUrl: './create-and-manage-items.component.html',
  styleUrls: ['./create-and-manage-items.component.scss']
})
export class CreateAndManageItemsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  pageForward(){
    this.router.navigate(["create-a-procedure"]);
  }
  pageBackward(){
    this.router.navigate(["create-a-template"]);
  }

}
