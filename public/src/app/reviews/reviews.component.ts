import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  id: any
  reviews: any
  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params['id']
      this.getReviews()
    })
  }
  getReviews() {
    let observable = this._http.getOne(this.id)
    observable.subscribe(data => {
      console.log(data)
      this.reviews = data['data']['ratings']
    })
  }
  deleteRating(revid) {
    console.log(revid)
    let observable = this._http.delRating(this.id, revid)
    observable.subscribe(data => {
      console.log(data)
    })
  }
  deleteMovie() {
    let observable = this._http.delMovie(this.id) 
    observable.subscribe(data => {
      console.log(data)
    })
  }

}
