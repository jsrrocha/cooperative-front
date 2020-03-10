import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'open-agenda-voting',
  templateUrl: './open-agenda-voting.component.html', 
}) 
export class OpenAgendaVotingComponent {
	agendaForm: FormGroup;
	agendas: Object = [];
	selectAgenda;

	constructor(
		private service: ServiceComponent,
		private formBuilder: FormBuilder,
		private router: Router 
	){

		this.agendaForm = this.formBuilder.group({
	  		time: ['', Validators.required]
		}); 

		this.getAgendas();
	}

	get form() {
	  return this.agendaForm.controls;
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

	openAgendaVoting(){
		
		this.service.openAgendaVoting(this.selectAgenda,this.form.time.value).subscribe(
		    (data:any)=> {
		        alert("Votação da pauta iniciada sucesso");
		        this.router.navigate(["/"]);
		    },
		    error => {
		     	this.service.handleErrors(error);
		    });
	}
}
