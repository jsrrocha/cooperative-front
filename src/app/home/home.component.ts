import { Component, OnInit,ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { ServiceComponent } from '../service.component';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html' 
})

export class HomeComponent implements OnInit {
	 @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
   backendUrlCognix = "http://localhost:8086";
   notInHome = this.router.url != '/';

   constructor(
       private router: Router 
   ){} 

    ngOnInit() {
    }

    openMyMenu() {
  		this.trigger.openMenu();
  	}

    reloadHome(){
      this.router.navigate(["/"]);
    }

    gotoAddAgenda(){
      this.router.navigate(["/agenda/add"]);
    }

    gotoOpenAgendaVoting(){
      this.router.navigate(["/agenda/voting/open"]);
    } 

    gotoVoteAgenda(){
      this.router.navigate(["/agenda/voting"]);
    } 

    gotoResultAgendaVoting(){
      this.router.navigate(["/agenda/voting/result"]);
    }


}
