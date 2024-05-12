import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoveisService {

  apiurl!: string;
  crwurl!: string;
  keyurl!: string;
  imgurl!: string;
  constructor(public http: HttpClient) {


  }


  getmovie(movieID: any): Observable<any> {
    this.apiurl = `https://api.themoviedb.org/3/movie/${movieID}?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.apiurl)
  }
  getcrew(movieID: any): Observable<any> {
    this.crwurl = `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.crwurl)
  }
  getkeyword(movieID: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/movie/${movieID}/keywords?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getimg(movieID: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/movie/${movieID}/images?api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getvid(movieID: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
  getrecomen(movieID: any): Observable<any> {
    this.keyurl = `https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&api_key=a586c2844a18807fac4bd0236583fce3`
    return this.http.get<any>(this.keyurl)
  }
}
