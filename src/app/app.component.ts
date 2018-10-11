import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Excella Dashboard - Monthly Activity Report';
  data = new Data;
  url = 'http://a3fc8a580cd8e11e883a00ac12175e8c-265801038.us-east-2.elb.amazonaws.com:8080/monthly-report/';
  constructor(private httpClient: HttpClient) {}
  chartData = [
    { data: [], label: 'Headcount' },
    { data: [], label: 'BD Pipeline' },
    { data: [], label: 'Recruting Pipeline' },
    { data: [], label: 'Bench+' }
  ];
  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data) => {
      this.data = res;
      this.chartData = [
        { data: [this.data.headCount], label: 'Headcount' },
        { data: [this.data.bdPipeline], label: 'BD Pipeline' },
        { data: [this.data.recrutingPipeline], label: 'Recruting Pipeline' },
        { data: [this.data.benchPluse ], label: 'Bench+' }
      ];
      console.log(this.data);
    });
  }
  chartOptions = {
    responsive: true
  };
 
  
   
  chartLabels = ['September'];

  onChartClick(event) {
    console.log(event);
  }
}
