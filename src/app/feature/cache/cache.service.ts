import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICacheItem } from './model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private httpClient: HttpClient) { }

  setCacheItem(cacheItem: ICacheItem) {
    return this.httpClient.post(`${environment.applicationUrl}/cache/set`, cacheItem);
  }

  getCacheItem(key: string): Observable<ICacheItem> {
    return this.httpClient.get<ICacheItem>(`${environment.applicationUrl}/cache/${key}`);
  }
}
