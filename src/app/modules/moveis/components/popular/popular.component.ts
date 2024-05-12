import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviepopularService } from 'src/app/services/moviepopular.service';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit, OnDestroy {
  // variable
  movies!: Subscription;
  movie!: any;
  constructor(
    public popular:MoviepopularService ,

  ) { }


  ngOnInit(): void {
    this.movies = this.popular.get().subscribe((data) => {
      this.movie = data.results
    });

  }

  ngOnDestroy(): void {
    this.movies.unsubscribe;
  }

}
