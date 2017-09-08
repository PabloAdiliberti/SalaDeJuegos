import { Component, OnInit } from '@angular/core';
import { Juego} from '../../Clase/juego';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  miJuego: Juego;
  constructor() 
  {
    this.miJuego = new Juego();
  }

  ngOnInit() {
  }

}
