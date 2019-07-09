import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  @Input() user;
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<boolean>();

  

  //constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  menuPress() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(!this.isOpen);
  }

  // Account
  /*logout() {
    this.auth.logout();
  }*/

}
