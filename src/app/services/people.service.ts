import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  popularUrl!: string;
  criurl!: string;
  url!: string;

  constructor(public http: HttpClient) { }

  getpeople(id: any): Observable<any> {
    this.popularUrl = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${id}&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.popularUrl)
  }

  get(peopid: any): Observable<any> {
    this.url = `https://api.themoviedb.org/3/person/${peopid}?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.url)
  }

  getpeop(peopid: any): Observable<any> {
    this.criurl = `https://api.themoviedb.org/3/person/${peopid}/combined_credits?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.criurl)
  }
}
