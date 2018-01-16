import { Component } from "@angular/core";
import { StrawHatsService } from "../services/strawhats.service";
import { Pirate } from "../models/pirate";

@Component({
    selector: 'strawhats-list',
    templateUrl: './strawhats-list.component.html',
    styleUrls: ["./strawhats-list.component.css"],
    providers: [ StrawHatsService ]
})
export class StrawHatsListComponent {    

    constructor(private strawhatsService: StrawHatsService){
        strawhatsService.getStrawHatCrewMembers();
    }
}