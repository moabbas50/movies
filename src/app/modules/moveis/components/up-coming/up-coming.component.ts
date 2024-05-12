import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesupcomingService } from 'src/app/services/moviesupcoming.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.css']
})
export class UpComingComponent implements OnInit, OnDestroy {
  // variable
  movies!: Subscription;
  movie!: any;
  constructor(
    public upcoming: MoviesupcomingService,

  ) { }


  ngOnInit(): void {
    this.movies = this.upcoming.get().subscribe((data) => {
      this.movie = data.results
    });

  }

  ngOnDestroy(): void {
    this.movies.unsubscribe;
  }

}
