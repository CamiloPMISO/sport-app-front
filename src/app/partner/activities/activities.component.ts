import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[];

  constructor(private activitiesService: ActivitiesService, private router: Router) { }

  ngOnInit() {
    this.activitiesService.getActivities().subscribe(
      activities => {
      this.activities = activities;
    });
  }

  public createService(){
    this.router.navigate(['../../partner/create-service']);
  }

  public deleteService(){
    this.router.navigate(['../../partner/delete-service']);
  }

}
