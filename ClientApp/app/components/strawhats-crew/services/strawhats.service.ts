import { Http, Response, Headers, RequestMethod, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/map";
import { Injectable, Inject } from "@angular/core";

import { Pirate } from "../models/pirate";

@Injectable()
export class StrawHatsService {
    
    private api_url: string = 'api/strawhats';
    public strawHats: Pirate[];

    constructor(
        private http: Http, 
        @Inject('BASE_URL') private base_url: string
    ) { }

    getStrawHatCrewMembers()
    {
        this.http.get(this.base_url + this.api_url)
        .map((data: Response) => {
            return data.json() as Pirate[];
        })
        .toPromise().then(x => {
            this.strawHats = x;
        });              
    }  
}