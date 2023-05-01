import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Url="http://universities.hipolabs.com/search?country"


  httpHeaders:HttpHeaders = new HttpHeaders()
                                .set("Content-type","application/json");

  constructor(private http:HttpClient) { }       
 

  getDataFromSerever(endPoint:string){
    const url = this.Url + endPoint;
    return this.http.get(url,{headers:this.httpHeaders})
  }
}
