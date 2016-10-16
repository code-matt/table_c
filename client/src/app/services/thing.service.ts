import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http'
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import 'rxjs/add/operator/map'

@Injectable()
export class ThingService {
  constructor(private _http: Http){}

  getThings(search) {
    var headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
    
    return this._http.get("http://localhost:3000/api/v1/conversations?location=" + search, {
      headers: headers
    })
    .map(
      res => res.json(),
      error => console.log(error))
  }

  loadThings(search) {
    var headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
    
    return this._http.get("http://localhost:3000/api/v1/conversations?location=" + search[0] + '&day=' + search[1] + '&meal=' + search[2] +'&load=true', {
      headers: headers
    })
    .map(
      res => res.json(),
      error => console.log(error))
  }

  searchThings(search) {
    var headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
    
    return this._http.get("http://localhost:3000/api/v1/conversations?location=" + search.location + '&day=' + search.for + '&meal=' + search.eating +'&search=true', {
      headers: headers
    })
    .map(
      res => res.json(),
      error => console.log(error))
  }
}
