import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddAgendaComponent } from './agenda/add-agenda.component';
import { OpenAgendaVotingComponent } from './agenda/open-agenda-voting.component';
import { VoteAgendaComponent } from './agenda/vote-agenda.component';
import { ResultAgendaVotingComponent } from './agenda/result-agenda-voting.component';



const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'agenda/add', component: AddAgendaComponent }, 
{ path: 'agenda/voting/open', component: OpenAgendaVotingComponent },
{ path: 'agenda/voting', component: VoteAgendaComponent },
{ path: 'agenda/voting/result', component: ResultAgendaVotingComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
