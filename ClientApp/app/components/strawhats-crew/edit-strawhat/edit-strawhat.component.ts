import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { Pirate } from "../models/pirate";
import { StrawHatsService } from "../services/strawhats.service";
import { Params } from "@angular/router/src/shared";

@Component({
    selector : 'edit-strawhat',
    templateUrl : './edit-strawhat.component.html',
    providers : [ StrawHatsService ]
})
export class EditStrawHatComponent implements OnInit
{
    strawhat : Pirate;
    activatedRouteSubscription : Subscription;
    
    constructor(
        private strawHatsService : StrawHatsService, 
        private activatedRoute : ActivatedRoute,
        private router : Router
    )
    {        
    }

    ngOnInit(): void 
    {
        this.strawhat = {
            id: 0,
            name: "",
            nickName: "",
            position: "",
            crewName: "Straw Hat Pirates",
            bounty: 0
        };

        this.activatedRouteSubscription = this.activatedRoute.params
        .map(param => param.id as number)
        .subscribe(
            (id : number) => {                
                this.strawHatsService.get(id)
                .subscribe(
                    (res : Pirate) => this.strawhat = res,
                    (err : any) => console.log(err)
                )
            },
            (err : any) => {
                console.error(err);
            }
        );
        
    }

    save({value, valid} : {value: Pirate, valid: boolean})
    {        
        this.strawHatsService.update(value)
        .subscribe(
            (res) => this.router.navigate(['']),
            (err) => console.error(err)
        );
    }

    ngOnDestroy() : void
    {
        this.activatedRouteSubscription.unsubscribe();
    }
}