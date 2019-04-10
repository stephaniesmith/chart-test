import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    title: {
      display: true,
      text: 'Tons of CO2 Avoided',
      fontSize: 30
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Weight (tons)',
          fontSize: 30
        }
      }],
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }]
    },
    responsive: true,
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    {
      data: [65, 34, 23, 29, 87, 75, 28],
      label: 'Tons of CO2',
      hoverBackgroundColor: 'rgba(255, 0, 0, .9)'
    }
  ];
  private colors = [
    {
      backgroundColor: 'rgba(255, 0, 0, 0.4)'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
