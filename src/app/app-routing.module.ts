import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AddAnnonceComponent} from "./add-annonce/add-annonce.component";
import {EditAnnonceComponent} from "./edit-annonce/edit-annonce.component";
import {AnnonceComponent} from "./annonce/annonce.component";
import {DetailAnnonceComponent} from "./detail-annonce/detail-annonce.component";

const routes: Routes = [
  {path:"AddAnnonce", component:AddAnnonceComponent},
  {path:"ListesAnnonces", component:AnnonceComponent},
  {path:"DetailsAnnonces/:id", component:DetailAnnonceComponent},
  {path:"EditAnnonce/:id", component:EditAnnonceComponent},
  {path:"", redirectTo:"ListesAnnonces", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
