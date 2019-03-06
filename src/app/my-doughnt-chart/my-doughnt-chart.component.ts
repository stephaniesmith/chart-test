import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-doughnt-chart',
  templateUrl: './my-doughnt-chart.component.html',
  styleUrls: ['./my-doughnt-chart.component.scss']
})
export class MyDoughntChartComponent implements OnInit {

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [213, 345, 532, 199];
  public doughnutChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

}
