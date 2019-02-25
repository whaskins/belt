import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute } from '@angular/router'
import { enableBindings } from '@angular/core/src/render3';
@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  stars = 5
  review = ""
  id: any
  reviewer = ""
  commentError?: any
  nameError?: any
  enabeled = false
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute, 
    private _router: Router){}
  ngOnInit() {
    this._route.params.subscribe(params => {this.id = params['id']})
    
  }
  newReview() {
    let observable = this._httpService.postRating(this.id, {rating: this.stars, comment: this.review, reviewer: this.reviewer})
    observable.subscribe(data => {
      console.log(data)
      this._router.navigate([this._route.parent])
    })
  }
  checkName() {
    if (this.reviewer.length < 3) {
      this.nameError = "Name must be at least 3 chars"
    }
    else {
      this.nameError = null
    }
    this.enable()
  }
  checkComment() {
    if (this.review.length < 3) {
      this.commentError = "Name must be at least 3 chars"
    }
    else {
      this.commentError = null
    }
    this.enable()
  }
  enable() {
    if (this.reviewer.length > 2 && this.review.length > 2 ) {
      this.enabeled = true
    }
  }


}
