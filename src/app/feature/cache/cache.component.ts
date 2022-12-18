import { Component, OnInit } from '@angular/core';
import { CacheService } from './cache.service';

@Component({
  selector: 'app-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {

  constructor(private cacheService: CacheService) { }
  
  ngOnInit(): void { }

}
