import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
