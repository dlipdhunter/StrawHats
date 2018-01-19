import { Http, Response, Headers, RequestMethod, RequestOptions } from "@angular/http";

import { Injectable, Inject } from "@angular/core";

import { Pirate } from "../models/pirate";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import { of } from "rxjs/observable/of";

@Injectable()
export class StrawHatsService {
    
    private api_url: string = 'api/strawhats';    

    constructor(
        private http: Http, 
        @Inject('BASE_URL') base_url: string
    ) { 
        this.api_url = base_url + this.api_url;
    }   
    
    getAll(){        
        return this.http.get(this.api_url)
        .map((data: Response) => {
            return data.json() as Pirate[];
        })
        .toPromise();
    }

    getAllAsObservable() : Observable<Pirate[]>
    {        
        return this.http.get(this.api_url).map((data: Response) => {
            return data.json() as Pirate[];
        });
    }

    add(pirate: Pirate){
       return this.http.post(this.api_url, pirate).map((data:Response) => {
            return data.json() as Pirate;
        }).toPromise();
    }
}