import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Activity } from './activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activitiesService.getActivities().subscribe(
      activities => {
      this.activities = activities;
    });
  }

}
