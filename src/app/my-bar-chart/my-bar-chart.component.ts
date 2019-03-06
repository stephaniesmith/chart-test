import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }],
    }
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 34, 23, 29, 87, 75, 28], label: 'Series A' },
    { data: [32, 19, 63, 74, 48, 22, 64], label: 'Series B' },
  ];


  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLegend = true;
  xAxisLegend = 'Country';
  showYAxisLegend = true;
  yAxisLegend = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A2B', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { multi });
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
