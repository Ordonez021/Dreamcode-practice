import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  imports: [],
  templateUrl: './saludador.component.html',
  styleUrl: './saludador.component.css'
})
export class SaludadorComponent {
  mensaje: String = '';
  saludar(){
    this.mensaje = "hello world";
  }
}
