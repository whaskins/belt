import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Output() update = new EventEmitter<string>()
  titleError = true
  stars = 5
  review = ""
  id: any
  reviewer = ""
  commentError?: any
  nameError?: any
  allGood = false
  newCake = {
    imageURL: "",
    baker: ""
  }
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  contactParent() {
    this.update.emit()
  }
  addNewCake() {
    let observable = this._httpService.postCake({data: this.newCake})
    observable.subscribe(data => {
      console.log(data)
      this._httpService.postRating(data['data']['_id'], {reviewer: this.reviewer, rating: this.stars, comment: this.review})
      this.contactParent()

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
  checkTitle() {
    if (this.newCake.imageURL.length < 2) {
      this.titleError = true
    }
    else {
      this.titleError = false
    }
  }
  enable() {
    if (this.reviewer.length > 2 && this.review.length > 2 && this.newCake.imageURL.length > 2) {
      this.allGood = true
    }
  }
}
