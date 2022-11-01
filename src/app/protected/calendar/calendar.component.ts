import { Component, OnInit, ViewChild } from '@angular/core';
import {
  EventSettingsModel,
  ScheduleComponent,
  EventRenderedArgs,
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  ResizeService,
  DragAndDropService,
} from '@syncfusion/ej2-angular-schedule';
import { DataSoruce, TrainingDay, ActivityType } from './calendar.interfaces';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService,
  ],
})
export class CalendarComponent implements OnInit {
  @ViewChild('schedule')
  public scheduler: ScheduleComponent;

  public selectedDate: Date = new Date();

  public eventSettings: EventSettingsModel = { dataSource: [] };

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.getTrainingPlan().subscribe(trainingPlan => {
      this.scheduler.eventSettings.dataSource = this.activitiesToDataSource(
        trainingPlan.trainingDays
      );
    });
  }

  private getColorByType(type: string): string {
    let color: string = '#357cd2';
    if (type === ActivityType.EVENT) {
      color = '#f57f17';
    }
    return color;
  }

  public onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data['CategoryColor'] as string;
    if (!args.element || !categoryColor) {
      return;
    }

    args.element.style.backgroundColor = categoryColor;
  }

  private stringToDate(date: string, hour: string): Date {
    let splitDate = date.split('-');
    let splitHour = hour.split(':');
    return new Date(
      parseInt(splitDate[0]),
      parseInt(splitDate[1]) - 1,
      parseInt(splitDate[2]),
      parseInt(splitHour[0]),
      parseInt(splitHour[1])
    );
  }

  private addMinutes(time: string, minsToAdd: number) {
    function D(J: number) {
      return (J < 10 ? '0' : '') + J;
    }
    var piece = time.split(':');
    var mins = parseInt(piece[0]) * 60 + +piece[1] + +minsToAdd;

    return D(((mins % (24 * 60)) / 60) | 0) + ':' + D(mins % 60);
  }

  private activitiesToDataSource(trainingDays: TrainingDay[]) {
    let dataSource: DataSoruce[] = [];

    for (let trainingDay of trainingDays) {
      for (let activity of trainingDay.activities) {
        dataSource.push({
          Id: activity.id,
          Subject: activity.name,
          StartTime: this.stringToDate(trainingDay.date, activity.start_at),
          EndTime: this.stringToDate(
            trainingDay.date,
            this.addMinutes(activity.start_at, activity.duration / 60)
          ),
          Description: activity.description,
          CategoryColor: this.getColorByType(activity.type),
          IsReadonly: true,
        });
      }
    }

    return dataSource;
  }
}
