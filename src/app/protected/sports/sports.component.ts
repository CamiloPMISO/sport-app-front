import { Component, OnInit } from '@angular/core';

import { ChartConfiguration } from 'chart.js';
import { Athlete } from '../home/home.interfaces';
import { HomeService } from '../home/home.service';
import { SportGroup } from './sport-group';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  
  descripcionRutina: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim sed tellus in sagittis. Duis a urna elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam luctus consequat augue, sed venenatis leo dignissim sit amet. Maecenas viverra dui nec tincidunt interdum. Maecenas sed eleifend lectus. Nunc quis cursus dui. Sed sit amet vestibulum dolor. Etiam nec aliquet risus.';
  user: Athlete;
  imc : number;
  height : number;
  weight : number;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService.getAthlete().subscribe(
      athlete => {
        this.user = athlete;
        this.height = Math.round(this.user.height);
        this.weight = Math.round(this.user.weight);
        this.imc = Math.round((this.user.weight)/((this.user.height*this.user.height)/10000));
      });
  }

  gruposPlanes: SportGroup[] = [
    new SportGroup('Plan de entrenamiento 1', 'Biceps, triceps y pectoral'),
    new SportGroup('Plan de entrenamiento 2', 'Pantorrilla y gluteo'),
  ];
  infoPerfil: string[] = [
    'Caracteristicas fisiologicas generales',
    'Lugar de residencia',
    'Historial deportivo',
  ];

  title = 'ng2-charts-demo';

  // PolarArea
  public polarAreaChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail Sales',
    'Telesales',
    'Corporate Sales',
  ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] =
    [{ data: [300, 500, 100, 40, 120] }];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };
}
