import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { SuiviDocument } from 'src/app/suivi-document';
import { SuiviDocumentService } from 'src/app/service/suivi-document.service';


@Component({
  selector: 'app-destruction-document',
  templateUrl: './destruction-document.component.html',
  styleUrls: ['./destruction-document.component.css']
})
export class DestructionDocumentComponent implements OnInit {
  doc:SuiviDocument[]=[];
 suividocument=new SuiviDocument()

 
  displayedColumns: string[] = ['id','chapitre_comptable','code','numero','date_De_creation_Du_Document','dateDestruction','libelle','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(private service:SuiviDocumentService,private _router:Router,private dialog:MatDialog) { }

 ngOnInit(): void {
   this.service.getDocuments().subscribe(
   data=>{ console.log("response recieved");
            this.dataSource=new MatTableDataSource(data) ;
            this.dataSource.paginator=this.paginator;
            this.dataSource.sort=this.sort
   },
   error=>console.log("exception occured")
   
   )
   }
  
 


 


 
}

