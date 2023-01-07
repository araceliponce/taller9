import { Component } from '@angular/core';

@Component({
  selector: 'app-en-clase',
  templateUrl: './en-clase.component.html',
  styleUrls: ['./en-clase.component.css']
})
export class EnClaseComponent {

//estos son atributos de la class aqui arriba exportada (enclasecomponent)

  //con ngif  si es true crea el elemento, no es que haga o quite el display

  mensaje = 'Angular - Desarrollo de aplicaciones';
  mostrar =true;
  valor = 'ocultar'



  generar(){
    if(this.mostrar){
      this.valor = 'mostrar';
      this.mostrar = false;
    } else{
      this.valor = 'ocultar';
      this.mostrar = true;
    }
  }

  
  nombre = '';
  apellidos = '';

  numero1 = 0;
  numero2 = 0;


  color(){
    return 'orange';
  }


  num3 = 0;
  num4 = 0;
  op = 'ninguno';



}
