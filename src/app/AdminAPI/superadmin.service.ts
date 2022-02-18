import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map, catchError } from 'rxjs/operators;
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperadminService {
  globle_url='http://18.117.230.114:8000/api/'
  imagepath='http://18.117.230.114:8000'

  constructor(private http: HttpClient) { }
  headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  .set('Authorization',"Token 483114a2c43a11b7ba14b0c795c9bf801b063cc8");
  categoryonedata():Observable<any>{
    return this.http.get(this.globle_url+"admin/category/post/one/",{"headers":this.headers})
  }
  createcategoryonedata(data:any):Observable<any>{
    return this.http.post(this.globle_url+"admin/category/post/one/",data,{"headers":this.headers})
  }
  //category subject
  getsubjects():Observable<any>{
    return this.http.get(this.globle_url+"admin/category/post/one/subject",{"headers":this.headers})
  }
  createsubjects(data:any):Observable<any>{
    return this.http.post(this.globle_url+"admin/category/post/one/subject",data,{"headers":this.headers})
  }
  deletesubjects(subjectid:any):Observable<any>{
    return this.http.delete(this.globle_url+"admin/category/post/one/subject/"+subjectid,{"headers":this.headers})
  }

}
