import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeDeVersement } from '../demande-de-versement';

@Injectable({
  providedIn: 'root'
})
export class DemandeDeVersementService {

  constructor(private http: HttpClient) { }
  public createDemande(demande:DemandeDeVersement) :Observable<any>{
    return this.http.post<any>("http://localhost:8083/api/test/Demande",demande);
  }
}
