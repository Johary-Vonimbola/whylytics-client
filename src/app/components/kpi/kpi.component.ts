import { Component, Input, OnInit } from '@angular/core';
import { Kpi } from '../../models/Kpi';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-kpi',
  imports: [
    PercentPipe,
    CurrencyPipe
  ],
  templateUrl: './kpi.component.html',
  styleUrl: './kpi.component.scss'
})
export class KpiComponent implements OnInit{

  @Input({
    required: true
  }) data!: Kpi;

  ngOnInit(): void {
    
  }
}
