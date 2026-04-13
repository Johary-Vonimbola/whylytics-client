import { inject, Injectable } from '@angular/core';
import { env } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Response } from '../models/Response';
import { Sale } from '../models/sale';
import { DashboardData } from '../models/dashboardData';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private url: string = `${env.url}/dashboard`;
  private http: HttpClient = inject(HttpClient);

  
  getData(): Observable<DashboardData>{
    return this.http.get<Response<DashboardData>>(this.url).pipe(
      map(res => {
        const data = res.data ?? null;
        return data;
      })
    )
  }

}
