import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionserviesService<T> {

  constructor(@Inject(String) public url:string,public http:HttpClient, ) { }

  get(): Observable<T>{
    return this.http.get<T>(this.url)
  }
  // getById(id: any): Observable<T> {
  //   return this.http.get<T>(this.url + `/${id}`)
  // }
  // create(obj: any): Observable<T> {
  //   return this.http.post<T>(this.url, obj)
  // }
  // update(id: any, obj: T): Observable<T> {
  //   return this.http.put<T>(this.url + `/${id}`, obj)
  // }
  // delet(id: any) {
  //   return this.http.delete(this.url + `/${id}`)
  // }


}
