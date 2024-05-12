import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesnowplayService } from 'src/app/services/moviesnowplay.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit, OnDestroy {
  // variable
  movies!: Subscription;
  movie!: any;
  constructor(
    public nowplay: MoviesnowplayService,

  ) { }


  ngOnInit(): void {
    this.movies = this.nowplay.get().subscribe((data) => {
      this.movie = data.results
    });

  }

  ngOnDestroy(): void {
    this.movies.unsubscribe;
  }

}
