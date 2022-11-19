import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Sport App Administrador';

  constructor(private router: Router) {}

  logout(): void {
    /*swal.fire('Logout', `Hola ${this.authService.usuario.username}, has cerrado sesión con éxito!`, 'success');
    this.authService.logout();*/

    this.router.navigate(['/home']);
  }

}
