import { Component, OnInit } from '@angular/core';
import { Kpi } from '../../models/Kpi';
import { KpiComponent } from '../../components/kpi/kpi.component';
import { GraphComponent } from '../../components/graph/graph.component';
import { GraphData } from '../../models/GraphData';

@Component({
  selector: 'app-dashboard',
  imports: [
    KpiComponent,
    GraphComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  kpis!: Kpi[];
  dashboardData: GraphData[] = [
    new GraphData('Ventes', [1200, 2310, 2413, 8648, 3700, 5000, 1278, 9000, 2780, 2342, 8340, 3420])
  ];

  ngOnInit(): void {
    this.kpis = [
      new Kpi("Total des ventes", 1230000, 0.12),
      new Kpi("Total des ventes", 1230000, -0.03),
      new Kpi("Total des ventes", 1230000, 0.12)
    ]
  }

}
