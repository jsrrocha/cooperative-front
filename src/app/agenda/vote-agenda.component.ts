import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'vote-agenda',
  templateUrl: './vote-agenda.component.html', 
}) 
export class VoteAgendaComponent {
	agendas: Object = [];
	associates: Object = [];
	options: Object = ["Sim", "Não"];
	selectAgenda;
	selectAssociate;
	selectOption;

	constructor(
		private service: ServiceComponent,
		private router: Router 
	){

		this.getAgendas();
		this.getAssociates(); 
	}

	getAgendas(){
	    this.service.getAgendas().subscribe(
	      (data:any)=> {
	          this.agendas = data; 
	      },
	      error => {
	      	  this.service.handleErrors(error);
	      });
 	}

 	getAssociates(){
	    this.service.getAssociates().subscribe(
	      (data:any)=> {
	          this.associates = data; 
	      },
	      error => {
	      	 this.service.handleErrors(error);
	      });

 	}

	voteAgenda(){
		let vote = {
		  "associate": this.selectAssociate,
		  "vote": this.selectOption, 
		}
		this.service.voteAgenda(this.selectAgenda,vote).subscribe(
		    (data:any)=> {
		        alert("Votado com sucesso");
		    },
		    error => {
		     	this.service.handleErrors(error);
		    });
		this.router.navigate(["/agenda/voting"]);
	}
}
