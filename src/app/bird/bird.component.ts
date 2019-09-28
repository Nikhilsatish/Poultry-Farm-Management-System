import { Component, OnInit, OnChanges } from '@angular/core';
import {Router} from '@angular/router';
import { BirdService } from '../bird.service';
import { Bird } from 'bird';


@Component({
  selector: 'app-bird',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.css']
})
export class BirdComponent implements OnInit, OnChanges {

  birds: Bird[];
  statusMessage: string;
  bird = new Bird();
  
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

  addBird(): void{
      console.log("inside the addBird()::::::")
      this._birdService.addBird(this.bird)
          .subscribe((response) => {console.log(response); this.getBirds();this.reset();},
          (error) =>{
              console.log(error);
              this.statusMessage = "Problem with service. Please try again later!";
          }
      );   
      
      console.log("end of addBird()::::");
      //this._router.navigate(['/birds']);
  }

  private reset(){
      console.log("inside the reset():::::::");
      this.bird.bird_id = null;
      this.bird.bird_date = null;
      this.bird.bird_qty = null;
      this.bird.bird_amt = null;
      console.log("end of reset():::::::");
  }

  ngOnChanges(changes:any) {
      console.log("calling ngOnChanges()::::::::");
  }

  deleteBird(birdId: string){
      console.log("Inside the deleteBird()::::Bird id::::"+birdId);
      this._birdService.deleteBird(birdId)
          .subscribe((response) => {console.log(response); this.getBirds();},
          (error) =>{
              console.log(error);
              this.statusMessage = "Problem with service. Please try again later!";
          });
          this.reset();
          console.log("end of deleteBird():::::::");
  }

  getBird(birdId: string){
      console.log("Inside the updateBird()::::::Bird id::::"+birdId);
      this._birdService.getBirdById(birdId)
          .subscribe((birdData) => {this.bird = birdData; this.getBirds(); }),
          (error) => {
              console.log(error);
              this.statusMessage = "Problem with service. Please try again later!";
          }
      this.reset();    
      console.log("end of updateBird()::::::");
  }

}
