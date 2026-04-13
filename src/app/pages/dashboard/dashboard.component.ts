import { Component, inject, OnInit } from '@angular/core';
import { Kpi } from '../../models/Kpi';
import { KpiComponent } from '../../components/kpi/kpi.component';
import { GraphComponent } from '../../components/graph/graph.component';
import { GraphData } from '../../models/GraphData';
import { ChatterComponent } from '../../components/chatter/chatter.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    KpiComponent,
    GraphComponent,
    ChatterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  kpis!: Kpi[];
  dashboardData: GraphData[] = [];
  dashboardService: DashboardService = inject(DashboardService);

  ngOnInit(): void {
    const sales = this.dashboardService.getData();
    sales.subscribe(res => {
      this.kpis = [
        new Kpi("Total des ventes", res.totalSale.amount, res.totalSale.percent / 100, true),
        new Kpi("Nombre total de vente", res.saleCount.amount, res.saleCount.percent / 100, false),
        new Kpi("Top produit de ce mois", res.topProduct, 0, false)
      ];
      this.dashboardData = [
        new GraphData("Ventes", res.graphData)
      ];
    });
  }

}
