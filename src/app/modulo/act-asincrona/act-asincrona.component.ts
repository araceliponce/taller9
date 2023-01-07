import { Component } from '@angular/core';

@Component({
  selector: 'app-act-asincrona',
  templateUrl: './act-asincrona.component.html',
  styleUrls: ['./act-asincrona.component.css']
})
export class ActAsincronaComponent {

  
  num1 = 0;
  num2 = 0;
  operaciones = ['sumar', 'restar','multiplicar','dividir'];


  opcionDefault = '-Escoge una operacion-'


selected = null;
fontColor = 'black';

  update(ev:any){
    this.selected = ev.target.value;

    this.num1 = +this.num1
    this.num2 = +this.num2

    console.log('escogiste '+ this.selected, this.num1, this.num2); 

    
    if(this.selected=='sumar'){
      this.resultado = this.num1+this.num2;
      this.fontColor = 'cornflowerblue';
      // alert(this.resultado)
    }
    if(this.selected == 'restar'){
      this.resultado = this.num1-this.num2;
      this.fontColor = 'orange';
    }
    if(this.selected == 'multiplicar'){
      this.resultado = this.num1*this.num2;
      this.fontColor = 'purple';
    }
    if(this.selected == 'dividir'){
      this.resultado = this.num1/this.num2;
      this.fontColor = 'yellowgreen';

    } else if (this.selected == this.opcionDefault){
      this.resultado = 'no escogiste un operación';
      this.fontColor = 'red';
    }
  }

  resultado:any ;
  
}
