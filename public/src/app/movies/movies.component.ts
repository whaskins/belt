import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router){
  }
  ngOnInit() {
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
      for (var i = 0; i < this.cakes.length; i++) {
        var total = 0
        if (this.cakes[i]['ratings'].length > 0) {
          for (var j = 0; j < this.cakes[i]['ratings'].length; j++) {
            total += this.cakes[i]['ratings'][j]['rating']
          }
          this.cakes[i]['average'] = total / j
        }
        else {
          this.cakes[i]['average'] = "No reviews yet"
        }
      }
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