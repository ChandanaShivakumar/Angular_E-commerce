import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  showProfile(){
    this.router.navigate(['profile'], {relativeTo : this.route})
  }

  changePwd(){
    this.router.navigate(['changepwd'], {relativeTo : this.route})
  }

}
