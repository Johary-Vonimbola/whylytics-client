import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { env } from '../../environment';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private httpClient = inject(HttpClient);
  private url = `${env.url}/ai-assistant`;

  sendPrompt(prompt: string): Observable<string>{
    return this.httpClient.post<Response<string>>(this.url, { prompt: prompt }).pipe(
      map(res => {
        const result = res.data;
        return result;
      })
    )
  }
}
