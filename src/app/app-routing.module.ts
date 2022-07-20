import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { MistrabajosComponent } from './mistrabajos/mistrabajos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path:'portada' , component: PortadaComponent },
  { path:'mistrabajos' , component: MistrabajosComponent },
  { path:'contacto' , component: ContactoComponent },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
