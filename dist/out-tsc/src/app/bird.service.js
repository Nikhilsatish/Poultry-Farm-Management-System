import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
let BirdService = class BirdService {
    constructor(_httpService) {
        this._httpService = _httpService;
    }
    getAllBirds() {
        console.log("inside the service getAllBirds():::::::");
        return this._httpService.get("http://localhost:8080/api/bird")
            .map((response) => response.json())
            .catch(this.handleError);
    }
    getBirdById(birdId) {
        console.log("Inside the getBirdById() service::::::");
        return this._httpService.get("http://localhost:8080/api/bird/" + birdId)
            .map((response) => response.json())
            .catch(this.handleError);
    }
    addBird(bird) {
        let body = JSON.parse(JSON.stringify(bird));
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        if (bird.bird_id) {
            console.log("Inside addBird update service():::::::");
            return this._httpService.put("http://localhost:8080/api/bird/" + bird.bird_id, body, options);
        }
        else {
            console.log("Inside addBird add service():::::::");
            return this._httpService.post("http://localhost:8080/api/bird", body, options);
        }
    }
    deleteBird(birdId) {
        console.log("Inside the service deleteBird():::::bird id:::" + birdId);
        return this._httpService.delete("http://localhost:8080/api/bird/" + birdId);
    }
    handleError(error) {
        console.error(error);
        return Observable.throw(error);
    }
};
BirdService = tslib_1.__decorate([
    Injectable()
], BirdService);
export { BirdService };
//# sourceMappingURL=bird.service.js.map