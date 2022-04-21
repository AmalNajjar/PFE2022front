import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ConsulterAgenceComponent } from './CrudAgence/consulter-agence/consulter-agence.component';
import { CreeAgenceComponent } from './CrudAgence/cree-agence/cree-agence.component';
import { DeleteAgenceComponent } from './CrudAgence/delete-agence/delete-agence.component';
import { GestionAgenceComponent } from './CrudAgence/gestion-agence/gestion-agence.component';
import { UpdateAgenceComponent } from './CrudAgence/update-agence/update-agence.component';
import { ConsulterNomenclatureComponent } from './CrudNomenclature/consulter-nomenclature/consulter-nomenclature.component';
import { CreeNomenclatureComponent } from './CrudNomenclature/cree-nomenclature/cree-nomenclature.component';
import { DeleteNomenclatureComponent } from './CrudNomenclature/delete-nomenclature/delete-nomenclature.component';
import { GestionNomenclatureComponent } from './CrudNomenclature/gestion-nomenclature/gestion-nomenclature.component';
import { UpdateNomenclatureComponent } from './CrudNomenclature/update-nomenclature/update-nomenclature.component';
import { ConsulterDirectionComponent } from './CrudDiretion/consulter-direction/consulter-direction.component';
import { CreedirectionComponent } from './CrudDiretion/creedirection/creedirection.component';
import { DeleteDirectionComponent } from './CrudDiretion/delete-direction/delete-direction.component';
import { UpdateDirectionComponent } from './CrudDiretion/update-direction/update-direction.component';
import { GestionDirectionComponent } from './CrudDiretion/gestion-direction/gestion-direction.component';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TriDocumentComponent } from './Traitement 1ere age/tri-document/tri-document.component';
import { CreeDocumentComponent } from './Traitement 1ere age/cree-document/cree-document.component';
import { FicheDeRenseignementComponent } from './Traitement 1ere age/fiche-de-renseignement/fiche-de-renseignement.component';
import { InscriptionSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/inscription-sortie-doc.component';
import { CreeSortiedocComponent } from './Traitement 1ere age/inscription-sortie-doc/cree-sortiedoc/cree-sortiedoc.component';
import { ModifierSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/modifier-sortie-doc/modifier-sortie-doc.component';
import { ConsulterSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/consulter-sortie-doc/consulter-sortie-doc.component';
import { DestructionDocumentComponent } from './Traitement 1ere age/destruction-document/destruction-document.component';
import { InventaireDocument2emeageComponent } from './Traitement 1ere age/inventaire-document2emeage/inventaire-document2emeage.component';
import { DemandeDeVersementComponent } from './Traitement 1ere age/demande-de-versement/demande-de-versement.component';


const routes: Routes = [

 
// {path: "", redirectTo: "gestionDirection", pathMatch: "full" },
  {path:'gestionDirection',component:GestionDirectionComponent},
  {path:'creerdirection',component:CreedirectionComponent },
  {path:'updatedirection/:id',component:UpdateDirectionComponent},
  {path:'deletedirection/:id',component:DeleteDirectionComponent},
  {path:'consulterdirection/:id',component:ConsulterDirectionComponent},
  //
  {path:'gestionAgence',component:GestionAgenceComponent},
  {path:'creeragence',component:CreeAgenceComponent},
  {path:'updateagence/:id',component:UpdateAgenceComponent},
  {path:'deleteagence/:id',component:DeleteAgenceComponent},
  {path:'consulteragence/:id',component:ConsulterAgenceComponent},
  //
  {path:'gestionNomenclature',component:GestionNomenclatureComponent},
  {path:'creernomenclature',component:CreeNomenclatureComponent},
  {path:'updatenomenclature/:id',component:UpdateNomenclatureComponent},
  {path:'deletenomenclature/:id',component:DeleteNomenclatureComponent},
  {path:'consulternomenclature/:id',component:ConsulterNomenclatureComponent},
  //
  {path:'triDoc1ereage',component:TriDocumentComponent},
  {path:'creeDocument',component:CreeDocumentComponent},
  {path:'fiche/:id',component:FicheDeRenseignementComponent},
  {path:'inscriptionSortie1ere',component:InscriptionSortieDocComponent},
  {path:'creeSortie1ere',component:CreeSortiedocComponent},
  {path:'modifierSortie1ere/:id',component:ModifierSortieDocComponent},
  {path:'ConsulterSortie1ere/:id',component:ConsulterSortieDocComponent},
  {path:'demandedeversement',component:DemandeDeVersementComponent},
  //
  
  {
   path:'destruction-document/:id',
   component:DestructionDocumentComponent
 },

{path:'inventaire',component:InventaireDocument2emeageComponent},


  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

