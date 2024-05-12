import { Component, OnInit } from '@angular/core';
import { TvshowService } from 'src/app/services/tvshow.service';

@Component({
  selector: 'app-toprate',
  templateUrl: './toprate.component.html',
  styleUrls: ['./toprate.component.css']
})
export class ToprateComponent implements OnInit {
  tvshows!: any;
  constructor(public service: TvshowService) {

  }
  ngOnInit(): void {
    this.service.getonair().subscribe((data) => {
      this.tvshows = data.results
    })
  }

}
