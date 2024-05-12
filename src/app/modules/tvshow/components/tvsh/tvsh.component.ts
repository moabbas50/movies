import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowidService } from 'src/app/services/tvshowid.service';

@Component({
  selector: 'app-tvsh',
  templateUrl: './tvsh.component.html',
  styleUrls: ['./tvsh.component.css']
})
export class TvshComponent implements OnInit {
  num = 3500;
  tvser!: any;
  crew!: any;
  keywords!: any;
  media!: any;
  movieID!: any;
  imagees: any;
  responsiveOptions: any[] | undefined;
  constructor(public rout: Router, public acroute: ActivatedRoute, public tvsh:TvshowidService) {
    this.movieID = this.acroute.snapshot.paramMap.get('id')

  }


  ngOnInit(): void {
    // this.acroute.params.subscribe(params => {
    //   // Check if the ID parameter has changed
    //   if (params['id']!=this.movieID) {
    //     // Refresh the page
    //     this.refreshPage();
    //   }
    // });
    this.tvsh.gettv(this.movieID).subscribe((data) => {
      this.tvser = data
    });

    this.tvsh.getcrew(this.movieID).subscribe((dataa) => {
      this.crew = dataa
    });

    this.tvsh.getkeyword(this.movieID).subscribe((dataaa) => {
      this.keywords = dataaa

    });
    // this.tvsh.getvid(this.movieID).subscribe((dataaaa) => {
    //   this.media = dataaaa.results

    // });
    this.tvsh.getrecomen(this.movieID).subscribe((data) => {
      this.media = data.results

    });
    this.switchFunction();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 6,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
      }
    ];

  }


  // refreshPage() {
  //   window.location.reload();
  // }

  switchFunction(value = 'defult') {
    switch (value) {
      case 'defult':
        this.tvsh.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.posters
        })
        break;
      case 'posters':
        this.tvsh.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.posters
        })
        break;
      case 'backdrops':
        this.tvsh.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.backdrops
        })
        break;

    }
  }
}

