import { Component } from '@angular/core';
import { Alumnos } from '../models/alumnos';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {



alumnosArray: Alumnos[] = [
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
    	
    	}
]

selectedAlumnos: Alumnos = new Alumnos()

addOrEdit() {
    if(this.selectedAlumnos.name == ""){this.alumnosArray.push(this.selectedAlumnos)
        this.selectedAlumnos = new Alumnos();
    }

    this.selectedAlumnos = new Alumnos();
}



openForEdit(alumnos: Alumnos){
         this.selectedAlumnos= alumnos;
         
 }

 delete(){
     if(confirm("Estas seguro de querer eliminarlo??")){
        this.alumnosArray = this.alumnosArray.filter(x => x != this.selectedAlumnos);
        this.selectedAlumnos = new Alumnos();
     }
    
 }


}

