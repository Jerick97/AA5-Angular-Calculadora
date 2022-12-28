import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numero : string = '0'; //Lo que mostramos en pantalla
  operador : string = ''; //almacena el operador pulsado
  decimal : string = '';
  numero1: string = ''; //Almacena el Primer Valor
  numero2 : string = ''; //Almacena el Segundo Valor
  resultado : number = 0; //Almacena el resultado de las Operaciones
  segundoOperador : boolean = false; //Cambiara su valor si se pulsa en algún operador
  tieneDecimal : boolean = false; //Si se pulso en el button decimal
  constructor() { }

  ngOnInit(): void {
  }
  obtenerNumeroButton(numeroIngresado : string){
    if(this.segundoOperador){
      this.numero === '0'? this.numero = numeroIngresado: this.numero += numeroIngresado;
      this.numero2 = this.numero;
    }else{
      this.numero === '0'? this.numero = numeroIngresado: this.numero += numeroIngresado;
      this.numero1 = this.numero;
    }
  }

  obtenerOperadorButton(operador : string){
    if(operador == '='){
      this.numero = String(this.calcularOperaciones(this.operador,this.numero2));
    }else{
      if(operador == 'CA'){
        this.reset();
      }else{
        this.operador = operador;
        this.limpiar();
        this.segundoOperador = true;
      }
      
    }
  }

  public obtenerDecimalButton(decimal : string){
    if(!this.numero.includes('.')){
      this.numero+=decimal;
    }
  }

  public calcularOperaciones(op : string , numero2:string){
    switch(op){
      case '+':
        this.resultado = Number(this.numero1) + Number(numero2);
        break
      case '-':
        this.resultado  = Number(this.numero1) - Number(numero2);
        break
      case '*':
        this.resultado  = Number(this.numero1) * Number(numero2);
        break
      case '/':
        this.resultado  = Number(this.numero1) / Number(numero2);
        break
    }
    this.numero1 = String(this.resultado);
    return this.resultado;

  }

  public limpiar(){
    this.numero = "0";
  }

  public reset(){
    this.numero = "0";
    this.numero1 = "";
    this.numero2 = "";
    this.resultado = 0;
  }

}
