// Conteúdo completo de src/app/home/home.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {} // 2. Injete o Router

  // 3. Crie a função do botão
  irParaUtilidades() {
    // 'utilities' é o nome da página que criamos com 'ionic g page'
    this.router.navigateByUrl('/utilities'); 
  }
}