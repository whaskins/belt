(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");







var routes = [
    { path: 'movies', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_6__["MoviesComponent"], children: [
            { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
            { path: 'reviews/:id', component: _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsComponent"] },
            { path: 'newreview/:id', component: _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_5__["NewReviewComponent"] }
        ] },
    { path: '', pathMatch: 'full', redirectTo: '/movies' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    max-width: 200px;\n    height: auto;\n    display: inline-block;\n}\n.cake {\n    display: block;\n}\nform {\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYWtlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Rate My Cakes</h1>\n<a [routerLink]=\"['/movies']\">View All</a> | \n<a [routerLink]=\"['/movies', 'new']\">New</a> | \n\n\n  <router-outlet ></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'Cake Ratings';
        this.cakes = [];
        this.rating = {
            rating: 5,
            comment: ""
        };
        this.newCake = {
            imageURL: "",
            baker: ""
        };
        this.getCakes();
    }
    AppComponent.prototype.getCakes = function () {
        var _this = this;
        var observable = this._httpService.getCakes();
        observable.subscribe(function (data) {
            _this.cakes = data['data'];
        });
    };
    AppComponent.prototype.getACake = function (id) {
        var _this = this;
        var observable = this._httpService.getOne(id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.selectedCake = data;
        });
    };
    AppComponent.prototype.rateCake = function (id, rating, comment) {
        console.log(rating.value, comment.value);
        var observable = this._httpService.postRating(id, { rating: rating.value, comment: comment.value });
        observable.subscribe(function (data) {
            console.log(data);
        });
        comment.value = "";
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cake_cake_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cake/cake.component */ "./src/app/cake/cake.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/reviews/reviews.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/new-review/new-review.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cake_cake_component__WEBPACK_IMPORTED_MODULE_5__["CakeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_9__["NewComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_10__["ReviewsComponent"],
                _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_11__["NewReviewComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_12__["MoviesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cake/cake.component.css":
/*!*****************************************!*\
  !*** ./src/app/cake/cake.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    max-width: 300px;\n    height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FrZS9jYWtlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Nha2UvY2FrZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cake/cake.component.html":
/*!******************************************!*\
  !*** ./src/app/cake/cake.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Baked by {{cake.data.baker}}</h2>\n<div *ngFor=\"let rating of cake.data.ratings\">\n  <h3>{{rating.rating}} Stars</h3>\n  <h5>by {{rating.reviewer}}</h5>\n  <p>{{rating.comment}}</p>\n</div>"

/***/ }),

/***/ "./src/app/cake/cake.component.ts":
/*!****************************************!*\
  !*** ./src/app/cake/cake.component.ts ***!
  \****************************************/
/*! exports provided: CakeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CakeComponent", function() { return CakeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CakeComponent = /** @class */ (function () {
    function CakeComponent() {
    }
    CakeComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CakeComponent.prototype, "cake", void 0);
    CakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cake',
            template: __webpack_require__(/*! ./cake.component.html */ "./src/app/cake/cake.component.html"),
            styles: [__webpack_require__(/*! ./cake.component.css */ "./src/app/cake/cake.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CakeComponent);
    return CakeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getCakes = function () {
        return this._http.get('/cakes');
    };
    HttpService.prototype.getOne = function (id) {
        return this._http.get('/cakes/' + id);
    };
    HttpService.prototype.postCake = function (cake) {
        console.log(cake);
        return this._http.post('/cakes', cake['data']);
    };
    HttpService.prototype.postRating = function (id, rating) {
        return this._http.put('/cakes/' + id, rating);
    };
    HttpService.prototype.delRating = function (mv, id) {
        return this._http.delete('/ratings/' + mv + '/' + id);
    };
    HttpService.prototype.delMovie = function (id) {
        return this._http.delete('/cakes/' + id);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 50%;\n}\ntr {\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbnRyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cakes\">\n    <table class=\"table table-striped table-responsive-md btn-table\">\n      <tr *ngFor=\"let cake of cakes\">\n        <th>{{cake.imageURL}}</th>\n        <td>Rating:{{cake.average}}</td>\n        <td>\n          <button [routerLink]=\"['reviews/', cake._id]\">Read Reviews</button>\n          <button [routerLink]=\"['newreview/', cake._id]\">Write Review</button>\n        </td>\n      </tr>\n    </table>\n    <router-outlet (update)=\"getCakes()\"></router-outlet>"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.title = 'Cake Ratings';
        this.cakes = [];
        this.rating = {
            rating: 5,
            comment: ""
        };
        this.newCake = {
            imageURL: "",
            baker: ""
        };
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getCakes();
    };
    MoviesComponent.prototype.getCakes = function () {
        var _this = this;
        var observable = this._httpService.getCakes();
        observable.subscribe(function (data) {
            _this.cakes = data['data'];
            for (var i = 0; i < _this.cakes.length; i++) {
                var total = 0;
                if (_this.cakes[i]['ratings'].length > 0) {
                    for (var j = 0; j < _this.cakes[i]['ratings'].length; j++) {
                        total += _this.cakes[i]['ratings'][j]['rating'];
                    }
                    _this.cakes[i]['average'] = total / j;
                }
                else {
                    _this.cakes[i]['average'] = "No reviews yet";
                }
            }
        });
    };
    MoviesComponent.prototype.getACake = function (id) {
        var _this = this;
        var observable = this._httpService.getOne(id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.selectedCake = data;
        });
    };
    MoviesComponent.prototype.rateCake = function (id, rating, comment) {
        console.log(rating.value, comment.value);
        var observable = this._httpService.postRating(id, { rating: rating.value, comment: comment.value });
        observable.subscribe(function (data) {
            console.log(data);
        });
        comment.value = "";
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/new-review/new-review.component.css":
/*!*****************************************************!*\
  !*** ./src/app/new-review/new-review.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1yZXZpZXcvbmV3LXJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/new-review/new-review.component.html":
/*!******************************************************!*\
  !*** ./src/app/new-review/new-review.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n<form>\n  <label for=\"\">Name</label>\n  <p *ngIf=\"nameError\">{{nameError}}</p>\n  <input type=\"text\" name=\"name\" id=\"\" [(ngModel)]=\"reviewer\" (keyup)=\"checkName()\">\n    <select name=\"stars\" #rating id=\"\" [(ngModel)]=\"stars\">\n      <option value=1>1 Star</option>\n      <option value=2>2 Star</option>\n      <option value=3>3 Star</option>\n      <option value=4>4 Star</option>\n      <option value=5>5 Star</option>\n    </select><br>\n  <p *ngIf=\"commentError\">{{commentError}}</p>\n\n    <textarea [(ngModel)]=\"review\" name=\"comment\" #comment id=\"\" cols=\"20\" rows=\"5\" placeholder=\"Type your comment here\" (keyup)=\"checkComment()\"></textarea>\n    <button type=\"submit\" *ngIf=\"enabeled\" (click)=\"newReview()\" [routerLink]=\"['/movies']\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/new-review/new-review.component.ts":
/*!****************************************************!*\
  !*** ./src/app/new-review/new-review.component.ts ***!
  \****************************************************/
/*! exports provided: NewReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return NewReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.stars = 5;
        this.review = "";
        this.reviewer = "";
        this.enabeled = false;
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) { _this.id = params['id']; });
    };
    NewReviewComponent.prototype.newReview = function () {
        var _this = this;
        var observable = this._httpService.postRating(this.id, { rating: this.stars, comment: this.review, reviewer: this.reviewer });
        observable.subscribe(function (data) {
            console.log(data);
            _this._router.navigate([_this._route.parent]);
        });
    };
    NewReviewComponent.prototype.checkName = function () {
        if (this.reviewer.length < 3) {
            this.nameError = "Name must be at least 3 chars";
        }
        else {
            this.nameError = null;
        }
        this.enable();
    };
    NewReviewComponent.prototype.checkComment = function () {
        if (this.review.length < 3) {
            this.commentError = "Name must be at least 3 chars";
        }
        else {
            this.commentError = null;
        }
        this.enable();
    };
    NewReviewComponent.prototype.enable = function () {
        if (this.reviewer.length > 2 && this.review.length > 2) {
            this.enabeled = true;
        }
    };
    NewReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-review',
            template: __webpack_require__(/*! ./new-review.component.html */ "./src/app/new-review/new-review.component.html"),
            styles: [__webpack_require__(/*! ./new-review.component.css */ "./src/app/new-review/new-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewReviewComponent);
    return NewReviewComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"newMovie\">\n    <h3>Submit a cake</h3>\n    <form (submit)=\"addNewCake()\" class=\"text-center border border-light p-5\">\n      <label for=\"\">Title</label>\n      <p *ngIf=\"titleError\">You must have a title</p>\n      <input type=\"text\" name=\"baker\" [(ngModel)]=\"newCake.imageURL\" id=\"\" (keyup)=\"checkTitle()\"><br>\n      <label for=\"\">Name</label>\n  <p *ngIf=\"nameError\">{{nameError}}</p>\n  <input type=\"text\" name=\"name\" id=\"\" [(ngModel)]=\"reviewer\" (keyup)=\"checkName()\">\n    <select name=\"stars\" #rating id=\"\" [(ngModel)]=\"stars\">\n      <option value=1>1 Star</option>\n      <option value=2>2 Star</option>\n      <option value=3>3 Star</option>\n      <option value=4>4 Star</option>\n      <option value=5>5 Star</option>\n    </select><br>\n  <p *ngIf=\"commentError\">{{commentError}}</p>\n\n    <textarea [(ngModel)]=\"review\" name=\"comment\" #comment id=\"\" cols=\"20\" rows=\"5\" placeholder=\"Type your comment here\" (keyup)=\"checkComment()\"></textarea>\n      <input *ngIf=\"allGood\" type=\"submit\">\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService) {
        this._httpService = _httpService;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.titleError = true;
        this.stars = 5;
        this.review = "";
        this.reviewer = "";
        this.allGood = false;
        this.newCake = {
            imageURL: "",
            baker: ""
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.contactParent = function () {
        this.update.emit();
    };
    NewComponent.prototype.addNewCake = function () {
        var _this = this;
        var observable = this._httpService.postCake({ data: this.newCake });
        observable.subscribe(function (data) {
            console.log(data);
            _this._httpService.postRating(data['data']['_id'], { reviewer: _this.reviewer, rating: _this.stars, comment: _this.review });
            _this.contactParent();
        });
    };
    NewComponent.prototype.checkName = function () {
        if (this.reviewer.length < 3) {
            this.nameError = "Name must be at least 3 chars";
        }
        else {
            this.nameError = null;
        }
        this.enable();
    };
    NewComponent.prototype.checkComment = function () {
        if (this.review.length < 3) {
            this.commentError = "Name must be at least 3 chars";
        }
        else {
            this.commentError = null;
        }
        this.enable();
    };
    NewComponent.prototype.checkTitle = function () {
        if (this.newCake.imageURL.length < 2) {
            this.titleError = true;
        }
        else {
            this.titleError = false;
        }
    };
    NewComponent.prototype.enable = function () {
        if (this.reviewer.length > 2 && this.review.length > 2 && this.newCake.imageURL.length > 2) {
            this.allGood = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewComponent.prototype, "update", void 0);
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/reviews/reviews.component.css":
/*!***********************************************!*\
  !*** ./src/app/reviews/reviews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlld3MvcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reviews/reviews.component.html":
/*!************************************************!*\
  !*** ./src/app/reviews/reviews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"deleteMovie()\" [routerLink]=\"['/']\">Delete Movie</button>\n<table *ngIf=\"reviews\">\n  <tr *ngFor=\"let rev of reviews\">\n    <th>{{rev.rating}} Stars</th>\n    <td>{{rev.reviewer}}</td>\n    <td>{{rev.comment}}</td>\n    <td><button (click)=\"deleteRating(rev._id)\" [routerLink]=\"['/']\">Delete</button></td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/reviews/reviews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reviews/reviews.component.ts ***!
  \**********************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getReviews();
        });
    };
    ReviewsComponent.prototype.getReviews = function () {
        var _this = this;
        var observable = this._http.getOne(this.id);
        observable.subscribe(function (data) {
            console.log(data);
            _this.reviews = data['data']['ratings'];
        });
    };
    ReviewsComponent.prototype.deleteRating = function (revid) {
        console.log(revid);
        var observable = this._http.delRating(this.id, revid);
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    ReviewsComponent.prototype.deleteMovie = function () {
        var observable = this._http.delMovie(this.id);
        observable.subscribe(function (data) {
            console.log(data);
        });
    };
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/warren/dojo/mean/angular/cakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map