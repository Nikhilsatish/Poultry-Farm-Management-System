import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BirdService } from '../bird.service';
import { Bird } from 'bird';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent implements OnInit {

  bird = new Bird();
  statusMessage: string;
  birds: Bird[];
  constructor(private _birdService: BirdService,
              private _router: Router){}
  
  ngOnInit(): void {
      console.log("calling ngOnInit()::::");
      this.getBirds();
  }

  getBirds(): void{
      console.log("Inside getBirds():::::")
      this._birdService.getAllBirds()
          .subscribe((birdData) => this.birds = birdData,
          (error) =>{
              console.log(error);
              this.statusMessage = "Problem with service. Please try again later!";
          }
      );
      console.log("end of getBirds():::::");
  }
}