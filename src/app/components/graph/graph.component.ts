import { AfterViewInit, Component, Input } from '@angular/core';
import { GraphData } from '../../models/GraphData';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-graph',
  imports: [],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements AfterViewInit{
  @Input({
    required: true
  }) data!: GraphData;
  chart: any;
  id: string = `chart-${Math.random().toString(36).substr(2, 9)}`;
  chartLabels: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData(): void{
    if(this.chart){
      this.chart.destroy();
    }

    this.chart = new Chart(this.id, {
      type: 'line',
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.data.title,
            data: this.data.data
          }
        ]
      }
    });

  }
}
