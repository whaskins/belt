import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient) { }
  getCakes() {
    return this._http.get('/cakes')  
  }
  getOne(id) {
    return this._http.get('/cakes/' + id)
  }
  postCake(cake) {
    console.log(cake)
    return this._http.post('/cakes', cake['data'])
  }
  postRating(id, rating) {
    return this._http.put('/cakes/' + id, rating)
  }
  delRating(mv, id) {
    return this._http.delete('/ratings/' + mv + '/' + id)
  }
  delMovie(id) {
    return this._http.delete('/cakes/' + id)
  }
}
