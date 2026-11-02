import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})
export class LibroComponent {
   constructor (private router: Router) {
   }

   ngOnInit() {
   }

   cerrarSesion() {
     localStorage.removeItem('sesionBiblioteca');
     this.router.navigate(['/login']);
   }
}
