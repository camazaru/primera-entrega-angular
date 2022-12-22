import { Component } from '@angular/core';
import alumnosjson from './body/assets/json/alumnos.json'



interface ALUMNOS {
  name: String,
  id: string,
  age : Number,
  birthplace : String,
  status : String,
  gendre: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primera-entrega-final';
alumnos: any = alumnosjson

 constructor(){
  
 }

}
