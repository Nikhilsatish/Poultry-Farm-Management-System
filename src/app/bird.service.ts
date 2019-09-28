import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Bird } from 'bird';

@Injectable()
export class BirdService {

  constructor(private _httpService: Http){}

  getAllBirds(): Observable<Bird[]>{
      console.log("inside the service getAllBirds():::::::");
      return this._httpService.get("http://localhost:8080/farm/bird")
              .map((response: Response) => response.json())
              .catch(this.handleError);
  }

  getBirdById(birdId: string): Observable<Bird>{
      console.log("Inside the getBirdById() service::::::");
      return this._httpService.get("http://localhost:8080/farm/bird/"+birdId)
              .map((response: Response) => response.json())
              .catch(this.handleError);
  }

  addBird(bird: Bird){
      let body = JSON.parse(JSON.stringify(bird));
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      if(bird.bird_id){    
          console.log("Inside addBird update service():::::::");
          return this._httpService.put("http://localhost:8080/farm/bird/"+bird.bird_id, body, options);
      }else{
          console.log("Inside addBird add service():::::::");
          return this._httpService.post("http://localhost:8080/farm/bird", body, options);
      }
  }

  deleteBird(birdId: string){
      console.log("Inside the service deleteBird():::::bird id:::"+birdId);
      return this._httpService.delete("http://localhost:8080/farm/bird/"+birdId);
  }

  private handleError(error: Response){
      console.error(error);
      return Observable.throw(error);
  }
}

