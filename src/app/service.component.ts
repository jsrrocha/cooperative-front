import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceComponent {

  backendUrl = "https://cooperative-sd.herokuapp.com/cooperative/";

  constructor(private http: HttpClient) {}

  addAgenda(data: object){
      const url = this.backendUrl + "agenda/add";
      return this.http.post(url,data);
  }

  getAgendas(){
      const url = this.backendUrl + "agenda/";
      return this.http.get(url); 
  }

  getAssociates(){
      const url = this.backendUrl + "associate/"; 
      return this.http.get(url); 
  }

  openAgendaVoting(id:number,time:number){
      const url = this.backendUrl + "agenda/" + id + "/voting/session/open/"  + time;
      return this.http.post(url,null);  
  } 

  voteAgenda(id:number,data: object){
      const url = this.backendUrl + "agenda/" + id + "/voting";
      return this.http.post(url,data);  
  } 

  resultAgendaVoting(id:number){
      const url = this.backendUrl + "agenda/" + id + "/voting/result"; 
      return this.http.post(url,null);  
  } 

  handleErrors(error: any){ 
    if(error.error != undefined){
      alert (error.error);
    }else{ 
      alert ("Opss! Algo deu errado \nTente novamente");
    }
  } 

}
