import { Component, Input } from '@angular/core';
import alumnosjson from './body/assets/json/alumnos.json'



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
