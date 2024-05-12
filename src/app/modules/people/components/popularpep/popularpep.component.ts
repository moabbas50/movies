import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';



@Component({
  selector: 'app-popularpep',
  templateUrl: './popularpep.component.html',
  styleUrls: ['./popularpep.component.css']
})
export class PopularpepComponent implements OnInit {



  // end paginator

  peoples!: any;
  id: any | null = 1;
  constructor(public service: PeopleService, private activ: ActivatedRoute) {
    this.id = this.activ.snapshot.paramMap.get('id');
  }


  // paginator
  increase() {
    this.id++
  }
  decrease() {
    if (this.id > 1) {
      this.id--
    }
  }
  // ///////////////////
  ngOnInit(): void {
    if (this.id == null) {
      this.id = 1;
    }
    this.service.getpeople(this.id).subscribe((data) => {
      this.peoples = data.results
    })

  }



}
