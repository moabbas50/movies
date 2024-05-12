import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-peofilepeople',
  templateUrl: './peofilepeople.component.html',
  styleUrls: ['./peofilepeople.component.css']
})

export class PeofilepeopleComponent implements OnInit {
  num = 3500;
  id: any;
  datas: any;
  peple: any;
  cri!: number;
  responsiveOptions: any[] | undefined;
  constructor(public service: PeopleService, private active: ActivatedRoute) {
    this.id = this.active.snapshot.paramMap.get('id');


  }
  ngOnInit(): void {

    this.service.get(this.id).subscribe((data) => {
      this.datas = data
      console.log(this.datas)
    })
    this.service.getpeop(this.id).subscribe((data) => {
      this.peple = data.cast

    })
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













}
