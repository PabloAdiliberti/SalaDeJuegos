import { Component, OnInit } from '@angular/core';
import { Agilidad} from '../../Clase/agilidad';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  miJuego: Agilidad;
  constructor() 
  {
    this.miJuego = new Agilidad();
  }

  ngOnInit() {
  }

}
