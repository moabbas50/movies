import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  popularUrl!: string;
  airingUrl!: string;
  onairUrl!: string;
  toprateUrl!: string;
  constructor(public http: HttpClient) { }
  getpopular(): Observable<any> {
    this.popularUrl = "https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3"
    return this.http.get<any>(this.popularUrl)
  }
  getairing(): Observable<any> {
    this.airingUrl = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3"
    return this.http.get<any>(this.airingUrl)
  }
  getonair(): Observable<any> {
    this.onairUrl = "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3"
    return this.http.get<any>(this.onairUrl)
  }
  gettoprate(): Observable<any> {
    this.toprateUrl = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3"
    return this.http.get<any>(this.toprateUrl)
  }
}
