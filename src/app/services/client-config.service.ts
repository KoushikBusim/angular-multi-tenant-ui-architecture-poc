import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientConfigService {
  constructor(private http: HttpClient) {}

  loadConfig(clientId: string): Observable<any> {
    return this.http.get<any>('assets/client-config.json').pipe(
      map((configs) => {
        console.log('Configs fetched:', configs); // 👀
        const selectedConfig = configs[clientId];
        return selectedConfig;
      })
    );
  }
}
