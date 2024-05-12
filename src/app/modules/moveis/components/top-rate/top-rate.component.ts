import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviestoprateService } from 'src/app/services/moviestoprate.service';

@Component({
  selector: 'app-top-rate',
  templateUrl: './top-rate.component.html',
  styleUrls: ['./top-rate.component.css']
})
export class TopRateComponent implements OnInit, OnDestroy {
  // variable
  movies!: Subscription;
  movie!: any;
  constructor(
    public toprate: MoviestoprateService,

  ) { }


  ngOnInit(): void {
    this.movies = this.toprate.get().subscribe((data) => {
      this.movie = data.results
    });

  }

  ngOnDestroy(): void {
    this.movies.unsubscribe;
  }

}
