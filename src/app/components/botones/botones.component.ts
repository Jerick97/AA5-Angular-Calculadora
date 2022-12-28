import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {
  @Output() numeroPulsado = new EventEmitter<string>();
  @Output() operadorPulsado = new EventEmitter<string>();
  @Output() decimalPulsado = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  obtenerNumero(valor: string){
    this.numeroPulsado.emit(valor);
  }
  obtenerOperador(op : string){
    this.operadorPulsado.emit(op);
  }

  obtenerDecimal(decimal: string){
    this.decimalPulsado.emit(decimal);
  }
}
