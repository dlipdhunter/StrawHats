// Template driven form

import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Pirate } from "../models/pirate";

@Component({
    selector: 'add-strawhat',
    templateUrl: './add-strawhat.component.html'
})
export class AddStrawHatComponent {
    strawhat: Pirate;

    /**
     *
     */
    constructor() {
        this.strawhat = {
            id: 0,
            name: "",
            nickName: "",
            position: "",
            crewName: "Straw Hat Pirates",
            bounty: 0
        }
        
    }
}