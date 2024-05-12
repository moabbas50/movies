import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  tvshows!: any;
  constructor(public service: TvshowService) {

  }
  ngOnInit(): void {
    this.service.getonair().subscribe((data) => {
      this.tvshows = data.results
    })
  }

}
