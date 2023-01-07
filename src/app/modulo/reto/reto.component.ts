import { Component } from '@angular/core';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent {

  boxIsChecked = false;

  changed(evt:any) {
    this.boxIsChecked = evt.target.checked;
    console.log(evt.target.checked)

    return this.boxIsChecked;
  }
}
