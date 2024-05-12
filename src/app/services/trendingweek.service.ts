import { Injectable } from '@angular/core';
import { ApifunctionserviesService } from './apifunctionservies.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrendingweekService extends ApifunctionserviesService<any> {

  constructor(public override http : HttpClient ) {
    super("https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3",http)
   }
}
