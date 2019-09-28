import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Bird } from 'bird';
let BirdListComponent = class BirdListComponent {
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
};
BirdListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bird-list',
        templateUrl: './bird-list.component.html',
        styleUrls: ['./bird-list.component.css']
    })
], BirdListComponent);
export { BirdListComponent };
//# sourceMappingURL=bird-list.component.js.map