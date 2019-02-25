import { Component } from '@angular/core';
import { HttpService } from './http.service'
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router){
    this.getCakes()
  }
  selectedCake?: any
  title = 'Cake Ratings';
  cakes = []
  rating = {
    rating: 5,
    comment: ""
  }
  newCake = {
    imageURL: "",
    baker: ""
  }
  getCakes() {
    let observable = this._httpService.getCakes()
    observable.subscribe(data => {
      this.cakes = data['data']
    })
  }
  
  getACake(id) {
    let observable = this._httpService.getOne(id) 
    observable.subscribe(data => {
      console.log(data)
      this.selectedCake = data
    })
  }
  rateCake(id, rating, comment) {
    console.log(rating.value, comment.value)
    let observable = this._httpService.postRating(id, {rating: rating.value, comment: comment.value})
    observable.subscribe(data => {
      console.log(data)
      
    })
    comment.value = ""
  }
}
