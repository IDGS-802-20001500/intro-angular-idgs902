import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  num1:string="";
  num2:string="";
  resp:number=0;

  suma():number{
    this.resp = (parseInt(this.num1)+parseInt(this.num2));
    return this.resp;
  }

}
