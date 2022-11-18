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
  GroupModel,
  View
} from '@syncfusion/ej2-angular-schedule';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';
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

  public group: GroupModel = { resources: ['Calendars'] };

  public allowMultiple = true;

  public currentView: View = 'Month';

  public calendarCollections: Record<string, any>[] = [
    { CalendarText: 'Entrenamientos', CalendarId: 1, CalendarColor: '#357cd2' },
    { CalendarText: 'Eventos', CalendarId: 2, CalendarColor: '#f57f17' },
    { CalendarText: 'Rutas', CalendarId: 3, CalendarColor: '#808000' },
  ];

  public resourceDataSource: Record<string, any>[] = [this.calendarCollections[0]];

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
    if (type === ActivityType.ROUTE) {
      color = '#808000';
    }
    return color;
  }

  private getCalendarIdByType(type: string): number {
    let calendarId: number = 1;
    if (type === ActivityType.EVENT) {
      calendarId = 2;
    }
    if (type === ActivityType.ROUTE) {
      calendarId = 3;
    }
    return calendarId;
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
          CalendarId : this.getCalendarIdByType(activity.type),
        });
      }
    }

    return dataSource;
  }

  public onChange(args : ChangeEventArgs): void {

    const value: number = parseInt((args.event?.currentTarget as Element ).querySelector('input')?.getAttribute('value') || "0")

    const resourceData: Record<string, any>[] =
    this.calendarCollections.filter((calendar: Record<string, any>) => calendar['CalendarId'] === value);

    if (args.checked) {
      this.scheduler.addResource(resourceData[0], 'Calendars', value - 1);
    } else {
      this.scheduler.removeResource(value, 'Calendars');
    }

  }
}
