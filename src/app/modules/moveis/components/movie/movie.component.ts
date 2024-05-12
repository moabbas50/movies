import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoveisService } from 'src/app/services/moveis.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  num = 3500;
  movie!: any;
  crew!: any;
  keywords!: any;
  media!: any;
  movieID!: any;
  imagees: any;
  responsiveOptions: any[] | undefined;
  constructor(public rout: Router, public acroute: ActivatedRoute, public moviess: MoveisService) {
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
    this.moviess.getmovie(this.movieID).subscribe((data) => {
      this.movie = data
    });

    this.moviess.getcrew(this.movieID).subscribe((dataa) => {
      this.crew = dataa
    });

    this.moviess.getkeyword(this.movieID).subscribe((dataaa) => {
      this.keywords = dataaa

    });
    // this.moviess.getvid(this.movieID).subscribe((dataaaa) => {
    //   this.media = dataaaa.results

    // });
    this.moviess.getrecomen(this.movieID).subscribe((data) => {
      this.media = data.results

    });
    this.switchFunction();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 5,
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
        this.moviess.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.posters
        })
        break;
      case 'posters':
        this.moviess.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.posters
        })
        break;
      case 'backdrops':
        this.moviess.getimg(this.movieID).subscribe((images) => {
          this.imagees = images.backdrops
        })
        break;

    }
  }
}
