import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  showOffers(){
    this.router.navigate(['offer'], {relativeTo : this.route})
  }
}
