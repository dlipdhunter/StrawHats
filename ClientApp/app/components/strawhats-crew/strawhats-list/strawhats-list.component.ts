import { Component, OnInit } from "@angular/core";
import { StrawHatsService } from "../services/strawhats.service";
import { Pirate } from "../models/pirate";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";

@Component({
    selector: 'strawhats-list',
    templateUrl: './strawhats-list.component.html',
    styleUrls: ["./strawhats-list.component.css"],
    providers: [ StrawHatsService ]
})
export class StrawHatsListComponent implements OnInit {    
    
    strawHats : Pirate[];

    strawHatsOb: Pirate[];

    constructor(private strawhatsService: StrawHatsService){
    }

    ngOnInit(): void {
        this.strawhatsService.getAll().then((crew)=> {
            this.strawHats = crew;
            console.log("Init data 1");
        });

        this.strawhatsService.getAllAsObservable().subscribe(result => {
            this.strawHatsOb = result;
            console.log("Init data 2");
        });

        console.log("Init");
    }
}