import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowidService {

  apiurl!: string;
  crwurl!: string;
  keyurl!: string;
  imgurl!: string;
  constructor(public http: HttpClient) {


  }


  gettv(tvid: any): Observable<any> {
    this.apiurl = `https://api.themoviedb.org/3/tv/${tvid}?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.apiurl)
  }
  getcrew(tvid: any): Observable<any> {
    this.crwurl = `https://api.themoviedb.org/3/tv/${tvid}/credits?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.crwurl)
  }
  getkeyword(tvid: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/tv/${tvid}/keywords?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getimg(tvid: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/tv/${tvid}/images?api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getvid(tvid: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/tv/${tvid}/videos?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getrecomen(tvid: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/tv/${tvid}/recommendations?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
}
