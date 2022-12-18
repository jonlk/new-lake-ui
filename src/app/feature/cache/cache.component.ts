import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache.service';
import { ICacheItem } from './model';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  locationUrl: string | null = ``;

  constructor(private cacheService: CacheService) { }

  ngOnInit(): void { }

  setCacheItem(): void {

    var cacheItem: ICacheItem = {
      key: "key01",
      value: "value from angular app updated"
    }

    this.cacheService
      .setCacheItem(cacheItem)
      .subscribe(resp => {
        this.locationUrl = resp.headers.get(`Location`)
      });
  }
}
