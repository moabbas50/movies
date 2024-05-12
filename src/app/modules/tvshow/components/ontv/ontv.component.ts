import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-ontv',
  templateUrl: './ontv.component.html',
  styleUrls: ['./ontv.component.css']
})
export class OntvComponent implements OnInit {
  tvshows!: any;
  constructor(public service: TvshowService) {

  }
  ngOnInit(): void {
    this.service.getonair().subscribe((data) => {
      this.tvshows = data.results
    })
  }

}
