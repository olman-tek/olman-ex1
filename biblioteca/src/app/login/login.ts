import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  usuario = '';
  contrasena = '';
  mensaje = '';

   constructor (private router: Router) {}

   login() {
    if(this.usuario === 'admin' && this.contrasena === '123') {
      localStorage.setItem('sesionBiblioteca', 'Activo');
      this.router.navigate(['/libro']);
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
   }
}
