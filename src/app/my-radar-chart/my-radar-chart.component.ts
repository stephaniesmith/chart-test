import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {
  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartType = 'radar';
  public radarChartData = [
    { data: [65, 34, 23, 29], label: '2017' },
    { data: [32, 19, 63, 74], label: '2018' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
