import { Component, OnInit,ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import alumnosjson from './assets/json/alumnos.json'


interface ALUMNOS {
  name: String,
  id: string,
  age : Number,
  birthplace : String,
  status : String,
  gendre: String
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

alumnos: any = alumnosjson



  

  pruebaNumber:number=0
  PruebaDiv:boolean=false
 

  constructor() { }

  ngOnInit(): void {
  }
  



funCambio(e:any){
  this.pruebaNumber = e;
  console.log("dato que viene de componente contenido:", this.pruebaNumber)
  
  if(this.pruebaNumber==1){
    this.PruebaDiv = true;
  }
}




}

