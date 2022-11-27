import { Component, OnInit } from '@angular/core';
import { AlimentaryGroup } from './alimentary-group';

import { ChartOptions } from 'chart.js';
import { HomeService } from '../home/home.service';
import { Athlete } from '../home/home.interfaces';

@Component({
  selector: 'app-alimentary',
  templateUrl: './alimentary.component.html',
  styleUrls: ['./alimentary.component.css'],
})
export class AlimentaryComponent implements OnInit {

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

  gruposAlimentos: AlimentaryGroup[] = [
    new AlimentaryGroup('Grupo 1', 'Banano, Piña, Manzana'),
  ];
  limitaciones: string[] = ['lactosa', 'Granos'];
  dietasRecomendadas: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim sed tellus in sagittis. Duis a urna elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam luctus consequat augue, sed venenatis leo dignissim sit amet. Maecenas viverra dui nec tincidunt interdum. Maecenas sed eleifend lectus. Nunc quis cursus dui. Sed sit amet vestibulum dolor. Etiam nec aliquet risus.';

  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [
    ['Download', 'Sales'],
    ['In', 'Store', 'Sales'],
    'Mail Sales',
  ];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
