import { Component, OnInit } from "@angular/core";
import { StrawHatsService } from "../services/strawhats.service";
import { Pirate } from "../models/pirate";
import { Observable } from "rxjs/Observable";
import { interval } from "rxjs/observable/interval";

@Component({
    selector: 'strawhats-list',
    templateUrl: './strawhats-list.component.html',
    styleUrls: ["./strawhats-list.component.css"],
    providers: [ StrawHatsService ]
})
export class StrawHatsListComponent implements OnInit 
{    
    
    strawHats : Pirate[];

    constructor(private strawhatsService: StrawHatsService)
    {
    }

    ngOnInit() : void 
    {              
        this.fetch();        
    }

    fetch() : void
    {
        this.strawhatsService.getAll()
        .subscribe(
            {
                next: (result : Pirate[]) => {
                    this.strawHats = result;                    
                },
                error: (err : any) => {
                    console.error(err);
                }
            }
        );
    }

    delete(id: number) : void
    {
        this.strawhatsService.delete(id)        
        .subscribe(
            res  => {                
                this.fetch();
            },
            err => {
                console.log(err);
            }
        );
    }

}