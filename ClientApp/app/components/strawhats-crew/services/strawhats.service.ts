import { Http, Response, Headers, RequestMethod, RequestOptions } from "@angular/http";
import { Injectable, Inject } from "@angular/core";

import { Pirate } from "../models/pirate";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class StrawHatsService {
    
    private api_url: string = 'api/strawhats';    

    constructor(private http: Http, @Inject('BASE_URL') base_url: string) 
    { 
        this.api_url = base_url + this.api_url;
    }

    /*
    * Returns a observable of pirate[]
    */
    getAll() : Observable<Pirate[]>
    {        
        return this.http.get(this.api_url)
        .map((data : Response) => {
            return data.json() as Pirate[];
        });
    }

    /*
    * Returns a pirate by id
    */
    get(id : number) : Observable<Pirate>
    {
        return this.http.get(this.api_url + '/' + id)
        .map((data : Response) => {
            return data.json() as Pirate;
        });
    }

    /*
    * Posts the pirate data to api and returns a observable of pirate
    */
    add(pirate : Pirate) : Observable<Pirate>
    {
       return this.http.post(this.api_url, pirate)
       .map((data : Response) => {
            return data.json() as Pirate;
        });
    }

    /*
    * Update the pirate
    */
    update(pirate : Pirate) : Observable<Response>
    {        
        return this.http.put(this.api_url + '/' + pirate.id, pirate);
    }

    /*
    * Delete the pirate by id
    */
    delete(id : number) : Observable<Response>
    {
        return this.http.delete(this.api_url + '/' + id);
    }
}