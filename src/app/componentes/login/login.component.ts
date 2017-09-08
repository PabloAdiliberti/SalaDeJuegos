import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  usuario: string = 'asd';
  pass: string = '';

  Entrar()
  {
    console.log(this.usuario + ' ' +this.pass);
  }

  ngOnInit() {
  }

}
