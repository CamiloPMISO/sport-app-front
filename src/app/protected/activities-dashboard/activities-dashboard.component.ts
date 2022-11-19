import { AfterContentInit, Component, OnInit } from '@angular/core';
import {  ChartOptions } from 'chart.js';

@Component({
  selector: 'app-activities-dashboard',
  templateUrl: './activities-dashboard.component.html',
  styleUrls: ['./activities-dashboard.component.css']
})
export class ActivitiesDashboardComponent implements AfterContentInit {


  public pieChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };
  public pieChartLabels= ['Entrenamiento', 'Eventos', 'Rutas'];
  public pieChartDatasetsTraining = [
    {
      label: 'Actividades',
      data: [12, 4, 2],
      backgroundColor: [
        'rgba(0, 0, 255, 0.6)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderColor: [
        'rgba(0, 0, 255, 1)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderWidth: 1,
    },
  ];

  public pieChartDatasetsTime = [
    {
      label: 'Tiempos',
      data: [60, 15, 5],
      backgroundColor: [
        'rgba(0, 0, 255, 0.6)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderColor: [
        'rgba(0, 0, 255, 1)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderWidth: 1,
    },
  ];

  public pieChartDatasetsDistance = [
    {
      label: 'Distancias',
      data: [20, 10, 4],
      backgroundColor: [
        'rgba(0, 0, 255, 0.6)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderColor: [
        'rgba(0, 0, 255, 1)',
        'rgba(255, 128, 0, 0.5)',
        'rgba(0, 255, 0, 0.5)',
      ],
      borderWidth: 1,
    },
  ];

  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor() { }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

}
