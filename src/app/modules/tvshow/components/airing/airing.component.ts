import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-airing',
  templateUrl: './airing.component.html',
  styleUrls: ['./airing.component.css']
})
export class AiringComponent implements OnInit {
  tvshows!: any;
  constructor(public service: TvshowService) {

  }
  ngOnInit(): void {
    this.service.getairing().subscribe((data) => {
      this.tvshows = data.results
    })
  }

}
