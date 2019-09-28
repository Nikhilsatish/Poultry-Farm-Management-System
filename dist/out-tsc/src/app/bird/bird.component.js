import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Bird } from 'bird';
let BirdComponent = class BirdComponent {
    constructor(_birdService, _router) {
        this._birdService = _birdService;
        this._router = _router;
        this.bird = new Bird();
    }
    ngOnInit() {
        console.log("calling ngOnInit()::::");
        this.getBirds();
    }
    getBirds() {
        console.log("Inside getBirds():::::");
        this._birdService.getAllBirds()
            .subscribe((birdData) => this.birds = birdData, (error) => {
            console.log(error);
            this.statusMessage = "Problem with service. Please try again later!";
        });
        console.log("end of getBirds():::::");
    }
    addBird() {
        console.log("inside the addBird()::::::");
        this._birdService.addBird(this.bird)
            .subscribe((response) => { console.log(response); this.getBirds(); this.reset(); }, (error) => {
            console.log(error);
            this.statusMessage = "Problem with service. Please try again later!";
        });
        console.log("end of addBird()::::");
        //this._router.navigate(['/birds']);
    }
    reset() {
        console.log("inside the reset():::::::");
        this.bird.bird_id = null;
        this.bird.bird_date = null;
        this.bird.bird_qty = null;
        this.bird.bird_amt = null;
        console.log("end of reset():::::::");
    }
    ngOnChanges(changes) {
        console.log("calling ngOnChanges()::::::::");
    }
    deleteBird(birdId) {
        console.log("Inside the deleteBird()::::Bird id::::" + birdId);
        this._birdService.deleteBird(birdId)
            .subscribe((response) => { console.log(response); this.getBirds(); }, (error) => {
            console.log(error);
            this.statusMessage = "Problem with service. Please try again later!";
        });
        this.reset();
        console.log("end of deleteBird():::::::");
    }
    getBird(birdId) {
        console.log("Inside the updateBird()::::::Bird id::::" + birdId);
        this._birdService.getBirdById(birdId)
            .subscribe((birdData) => { this.bird = birdData; this.getBirds(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            };
        this.reset();
        console.log("end of updateBird()::::::");
    }
};
BirdComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bird',
        templateUrl: './bird.component.html',
        styleUrls: ['./bird.component.css']
    })
], BirdComponent);
export { BirdComponent };
//# sourceMappingURL=bird.component.js.map