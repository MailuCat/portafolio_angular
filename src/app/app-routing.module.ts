import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MistrabajosComponent } from './mistrabajos/mistrabajos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path:'mistrabajos' , component: MistrabajosComponent },
  { path:'contacto' , component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
