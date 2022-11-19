import { Component, OnInit } from '@angular/core';
import { Athlete } from './home.interfaces';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Athlete;
  imc : number;
  height : number;
  weight : number;


  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getAthlete().subscribe(
      athlete => {
      this.user = athlete;
      this.height = Math.round(this.user.height);
      this.weight = Math.round(this.user.weight);
      this.imc = Math.round((this.user.weight)/((this.user.height*this.user.height)/10000));

    }
  );
  }

}
