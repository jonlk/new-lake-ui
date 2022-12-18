import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICacheItem } from './model';
import { Observable } from 'rxjs';
import { APPLICATION_API_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private httpClient: HttpClient) { }

  setCacheItem(cacheItem: ICacheItem) {
    return this.httpClient.post(`${APPLICATION_API_URL}/cache`, cacheItem);
  }

  getCacheItem(key: string): Observable<ICacheItem> {
    return this.httpClient.get<ICacheItem>(`${APPLICATION_API_URL}/cache/${key}`);
  }
}
