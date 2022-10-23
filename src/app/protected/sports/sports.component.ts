import { Component, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';
import { SportGroup } from './sport-group';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  gruposPlanes: SportGroup[] = [new SportGroup('Plan de entrenamiento 1', 'Biceps, triceps y pectoral'), new SportGroup('Plan de entrenamiento 2', 'Pantorrilla y gluteo')];
  infoPerfil: string[] = ['Caracteristicas fisiologicas generales', 'Lugar de residencia', 'Historial deportivo'];

  title = 'ng2-charts-demo';

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
