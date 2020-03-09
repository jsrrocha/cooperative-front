import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'add-agenda',
  templateUrl: './add-agenda.component.html', 
})
export class AddAgendaComponent {
	agendaForm: FormGroup;

	constructor(
		private service: ServiceComponent,
		private formBuilder: FormBuilder,
		private router: Router 
	){

		this.agendaForm = this.formBuilder.group({
	  		name: ['', Validators.required]
		});
	}

	get form() {
	  return this.agendaForm.controls;
	}

	addAgenda(){
		let agenda = {
		  "name": this.form.name.value
		}

		this.service.addAgenda(agenda).subscribe(
		    (data:any)=> {
		        alert("Pauta adicionada com sucesso");
		        this.router.navigate(["/"]);
		    },
		    error => {
		     	this.service.handleErrors(error);
		    });
	}
}
