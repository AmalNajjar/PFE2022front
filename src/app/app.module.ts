import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatDialogModule} from '@angular/material/dialog';

import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { DataTablesModule } from 'angular-datatables';



import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { AuthService } from './service/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { CreeAgenceComponent } from './CrudAgence/cree-agence/cree-agence.component';
import { UpdateAgenceComponent } from './CrudAgence/update-agence/update-agence.component';
import { ConsulterAgenceComponent } from './CrudAgence/consulter-agence/consulter-agence.component';
import { DeleteAgenceComponent } from './CrudAgence/delete-agence/delete-agence.component';
import { GestionAgenceComponent } from './CrudAgence/gestion-agence/gestion-agence.component';
import { GestionNomenclatureComponent } from './CrudNomenclature/gestion-nomenclature/gestion-nomenclature.component';
import { CreeNomenclatureComponent } from './CrudNomenclature/cree-nomenclature/cree-nomenclature.component';
import { UpdateNomenclatureComponent } from './CrudNomenclature/update-nomenclature/update-nomenclature.component';
import { DeleteNomenclatureComponent } from './CrudNomenclature/delete-nomenclature/delete-nomenclature.component';
import { ConsulterNomenclatureComponent } from './CrudNomenclature/consulter-nomenclature/consulter-nomenclature.component';
import { ConsulterDirectionComponent } from './CrudDiretion/consulter-direction/consulter-direction.component';
import { CreedirectionComponent } from './CrudDiretion/creedirection/creedirection.component';
import { DeleteDirectionComponent } from './CrudDiretion/delete-direction/delete-direction.component';
import { UpdateDirectionComponent } from './CrudDiretion/update-direction/update-direction.component';
import { GestionDirectionComponent } from './CrudDiretion/gestion-direction/gestion-direction.component';
import { SuiviDocumentComponent } from './Traitement 1ere age/suivi-document/suivi-document.component';
import { TriDocumentComponent } from './Traitement 1ere age/tri-document/tri-document.component';
import { CreeDocumentComponent } from './Traitement 1ere age/cree-document/cree-document.component';
import { OrderModule } from 'ngx-order-pipe';
import { InscriptionSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/inscription-sortie-doc.component';
import { FicheDeRenseignementComponent } from './Traitement 1ere age/fiche-de-renseignement/fiche-de-renseignement.component';
import { CreeSortiedocComponent } from './Traitement 1ere age/inscription-sortie-doc/cree-sortiedoc/cree-sortiedoc.component';
import { ConsulterSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/consulter-sortie-doc/consulter-sortie-doc.component';
import { ModifierSortieDocComponent } from './Traitement 1ere age/inscription-sortie-doc/modifier-sortie-doc/modifier-sortie-doc.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import {MatCardModule} from "@angular/material/card";
import { CommonModule, DatePipe } from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import { DestructionDocumentComponent } from './Traitement 1ere age/destruction-document/destruction-document.component';
import { InventaireDocument2emeageComponent } from './Traitement 1ere age/inventaire-document2emeage/inventaire-document2emeage.component';

import { DemandeDeVersementComponent } from './Traitement 1ere age/demande-de-versement/demande-de-versement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
  NavigationComponent,
   

    CreeAgenceComponent,
    UpdateAgenceComponent,
    ConsulterAgenceComponent,
    DeleteAgenceComponent,
    GestionAgenceComponent,
    GestionNomenclatureComponent,
    CreeNomenclatureComponent,
    UpdateNomenclatureComponent,
    DeleteNomenclatureComponent,
    ConsulterNomenclatureComponent,

        DeleteDirectionComponent,
    ConsulterDirectionComponent,
    UpdateDirectionComponent,
    CreedirectionComponent,
    GestionDirectionComponent,
    SuiviDocumentComponent,
    TriDocumentComponent,
    CreeDocumentComponent,
    InscriptionSortieDocComponent,
    FicheDeRenseignementComponent,
    CreeSortiedocComponent,
    ConsulterSortieDocComponent,
    ModifierSortieDocComponent,
    SignupComponent,
    SigninComponent,
    DestructionDocumentComponent,
    InventaireDocument2emeageComponent,

    DemandeDeVersementComponent,

   
   
     

       
        
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,  
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ReactiveFormsModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    
    MatButtonModule,
    
    MatSidenavModule,
    
    MatIconModule,
    
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
      OrderModule,



      CommonModule,
   
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatProgressSpinnerModule
  ],
  providers: [ 
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService,[DatePipe],
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
