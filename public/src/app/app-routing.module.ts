import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { AppComponent } from './app.component'
import { ReviewsComponent } from './reviews/reviews.component';
import { NewReviewComponent } from './new-review/new-review.component';

import { MoviesComponent } from './movies/movies.component';
const routes: Routes = [
  {path: 'movies', component: MoviesComponent, children: [
    {path: 'new', component: NewComponent},
    {path: 'reviews/:id', component: ReviewsComponent},
  {path: 'newreview/:id', component: NewReviewComponent}
  ]},
  {path: '', pathMatch: 'full', redirectTo: '/movies'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
