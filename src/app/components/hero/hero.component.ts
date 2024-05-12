import { Component } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { TrendingweekService } from 'src/app/services/trendingweek.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  movies!: any;
  // popularr!: string;
  constructor(public day: TrendingService,
    public week: TrendingweekService,
  ) {
    this.day.get().subscribe((data) => {
      this.movies = data;
    }, error => {
      console.log('Error fetching departments:',error);
      // Optionally, you can display an error message or handle any other action
    }
  );
  }


}
