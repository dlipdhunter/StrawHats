// Template driven form

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Pirate } from "../models/pirate";
import { StrawHatsService } from "../services/strawhats.service";

@Component({
    selector: 'add-strawhat',
    templateUrl: './add-strawhat.component.html',
    providers: [ StrawHatsService ]
})
export class AddStrawHatComponent {
    strawhat: Pirate;
   
    constructor(private strawHatsService: StrawHatsService, private router: Router) {
        this.strawhat = {
            id: 0,
            name: "",
            nickName: "",
            position: "",
            crewName: "Straw Hat Pirates",
            bounty: 0
        }        
    }

    save({value, valid} : {value: Pirate, valid: boolean}){
        value.crewName = "Straw Hat Pirates";        

        this.strawHatsService.add(value).then(result => {
            console.log(result);
            this.router.navigate(['']);
        }).catch(error => {
            console.error(error);
        });
    }    
}