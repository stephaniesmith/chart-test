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

  chartOptions = {
      onClick: this.graphClickEvent
  };

  ngOnInit() {
  }


  // chartClicked(event) {
  //   console.log('Here!');
  //   console.log(event);
  //   console.log('I made it!');
  // }

  // public chartClicked(e: any): void {
  //   console.log(e.active[0]._chart.getElementAtEvent(event)[0]._model);
  //   if (e.active.length > 0) {
  //   const chartElement = e.active[0]._chart.getElementAtEvent(event);
  //   console.log(chartElement[0]._model.datasetLabel);
  //   }
  // }

  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex, label, value);
      }
    }
  }


  graphClickEvent(event, array) {
      console.log(array);
      console.log('clicked on data index ', array[0]._index);
  }

}
