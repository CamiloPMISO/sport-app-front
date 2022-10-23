import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css'],
})
export class RiskComponent implements OnInit {
  user! : {
    edad: number;
    estatura: number;
    imc: number;
    deportes: Array<string>
  }
  description!: {
    desc: string
  }
  constructor() {}

  ngOnInit(): void {
    this.user = getUser()
    this.description = getDescription()
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
function getUser() {
  return {edad: 30, estatura: 180, imc: 20, deportes: ['Atletismo', 'Ciclismo']}
}

function getDescription() {
  return { desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}
}

