import { Component, OnInit,ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Alumnos} from '../models/alumnos'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

alumnosArray: Alumnos[] =
[
  {
    "name":"Alexis",
    "age":26,
    "birthplace":"Sonora",
    "status":"active",
    "gendre":"h"
    },
    {

    "name":"Azucena",
    "age":31,
    "birthplace":"Jalisto",
    "status":"active",
    "gendre":"m"
    
    },
    {
    "name":"Chucho",
    "age":14,
    "birthplace":"Mazatlan, Sinaloa",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Diana",
    "age":21,
    "birthplace":"Veracruz",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Erik",
    "age":26,
    "birthplace":"Puebla",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Freddy",
      "age":35,
    "birthplace":"Michoacan",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Gaba",
    "age":29,
    "birthplace":"Monterrey",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Hacib",
    "age":29,
    "birthplace":"DF",
    "status":"active",
    "gendre":"h"
        },
        {
    "name":"Manuel",
    "age":25,
    "birthplace":"Veracruz",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Maru",
    "age":32,
    "birthplace":"DF",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Paco",
    "age":31,
    "birthplace":"Mochis, Sinaloa",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Rubi",  
    "age":19,
    "birthplace":"Sinaloa",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Sandra", 
    "age":29,
    "birthplace":"DF",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Santana",
    "age":21,
    "birthplace":"Tamaulipas",
    "status":"active",
    "gendre":"h"
        },
    {
    "name":"Sel", 
    "age":23,
    "birthplace":"Baja Califirnia",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Yara",
    "age":27,
    "birthplace":"Cuba",
    "status":"active",
    "gendre":"m"
        },
    {
    "name":"Kevin",
    "age":20,
    "birthplace":"Guatemala",
    "status":"active",
    "gendre":"h"
        }, 
    {
    "name":"Gabriela", 
    "age":41,
    "birthplace":"Argentina",
    "status":"active",
    "gendre":"m"
        },   
    {
    "name":"Mario",
    "age":18,
    "birthplace":"El Salvador",
    "status":"active",
    "gendre":"h"
        }  
]

selectedAlumnos: Alumnos = new Alumnos()

 addOrEdit() {
this.alumnosArray.push(this.selectedAlumnos)

 }

  constructor() { }

  ngOnInit(): void {
  }
  








}

