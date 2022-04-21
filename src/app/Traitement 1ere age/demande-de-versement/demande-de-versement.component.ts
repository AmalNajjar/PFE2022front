import { Component, OnInit } from '@angular/core';
import { DemandeDeVersement } from 'src/app/demande-de-versement';
import { DemandeDeVersementService } from 'src/app/service/demande-de-versement.service';


@Component({
  selector: 'app-demande-de-versement',
  templateUrl: './demande-de-versement.component.html',
  styleUrls: ['./demande-de-versement.component.css']
})
export class DemandeDeVersementComponent implements OnInit {

  demande=new DemandeDeVersement();
  msg='';
  constructor(private _service:DemandeDeVersementService) { }

  ngOnInit(): void {
  }
  public  onSubmit(){ 
    this._service.createDemande(this.demande).subscribe(
      data=>{ 
        console.log("response received");
},
       error =>{   
       console.log("exception occured");
        this.msg=error.error;
     
       }
    )
  
  }

}
