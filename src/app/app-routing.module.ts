import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipologiaNaoProgramadaComponent }      from './tipologias/tipologia-nao-programada.component';
import { TipologiaProgramadaComponent }      from './tipologias/tipologia-programada.component';

import { Ocorrencia1ProgramadaComponent }      from './ocorrencias/ocorrencia1-programada.component';
import { Ocorrencia2ProgramadaComponent }      from './ocorrencias/ocorrencia2-programada.component';
import { Ocorrencia3ProgramadaComponent }      from './ocorrencias/ocorrencia3-programada.component';
import { Ocorrencia1NaoProgramadaComponent }      from './ocorrencias/ocorrencia1-nao-programada.component';
import { Ocorrencia2NaoProgramadaComponent }      from './ocorrencias/ocorrencia2-nao-programada.component';
import { Ocorrencia3NaoProgramadaComponent }      from './ocorrencias/ocorrencia3-nao-programada.component';
import { Ocorrencia4NaoProgramadaComponent }      from './ocorrencias/ocorrencia4-nao-programada.component';
import { Ocorrencia5NaoProgramadaComponent }      from './ocorrencias/ocorrencia5-nao-programada.component';

const routes: Routes = [
  { path: 'tipNaoProgramada', component: TipologiaNaoProgramadaComponent },
  { path: 'tipProgramada', component: TipologiaProgramadaComponent },
  { path: 'tipProgramada-ocorrencias1', component: Ocorrencia1ProgramadaComponent },
  { path: 'tipProgramada-ocorrencias2', component: Ocorrencia2ProgramadaComponent },
  { path: 'tipProgramada-ocorrencias3', component: Ocorrencia3ProgramadaComponent },
  { path: 'tipNaoProgramada-ocorrencias1', component: Ocorrencia1NaoProgramadaComponent },
  { path: 'tipNaoProgramada-ocorrencias2', component: Ocorrencia2NaoProgramadaComponent },
  { path: 'tipNaoProgramada-ocorrencias3', component: Ocorrencia3NaoProgramadaComponent },
  { path: 'tipNaoProgramada-ocorrencias4', component: Ocorrencia4NaoProgramadaComponent },
  { path: 'tipNaoProgramada-ocorrencias5', component: Ocorrencia5NaoProgramadaComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}