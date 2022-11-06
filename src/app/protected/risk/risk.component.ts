import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Athlete, Risk } from './risk.interfaces';
import { RiskService } from './risk.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css'],
})
export class RiskComponent implements OnInit {
  user: Athlete;
  risk: Risk;
  constructor(private riskService: RiskService,) {}

  ngOnInit(): void {
    this.riskService.getAthlete().subscribe(
        athlete => {
        this.user = athlete;
        console.log(this.user);
        this.risk = athlete.risks[0];  
      }
    );
    Chart.register(...registerables);
    var myChart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: ['Cardio', 'Morfológico', 'Muscular', 'Metabólico', 'Motriz'],
        datasets: [
          {
            label: 'Componentes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
            ],
            borderColor: [
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
              'rgba(126, 33, 153, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
