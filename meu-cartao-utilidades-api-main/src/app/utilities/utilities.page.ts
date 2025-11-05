// Conteúdo completo de src/app/utilities/utilities.page.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 1. Importe o HttpClient

@Component({
  selector: 'app-utilities',
  templateUrl: './utilities.page.html',
  styleUrls: ['./utilities.page.scss'],
})
export class UtilitiesPage {

  cep: string = '';           // Para guardar o valor do input
  endereco: any = null;     // Para guardar o resultado da API
  errorMessage: string = '';  // Para guardar mensagens de erro
  loading: boolean = false;   // Para mostrar/esconder o spinner

  constructor(private http: HttpClient) {} // 2. Injete o HttpClient

  buscarCep() {
    // 3. Reseta o estado antes de uma nova busca
    this.loading = true;
    this.endereco = null;
    this.errorMessage = '';

    // Limpa o CEP (remove traços, pontos)
    const cepLimpo = this.cep.replace(/\D/g, '');

    // Validação simples
    if (cepLimpo.length !== 8) {
      this.errorMessage = 'CEP inválido. Deve conter 8 números.';
      this.loading = false;
      return;
    }

    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;

    // 4. Faz a chamada GET para a API
    this.http.get(url).subscribe(
      (data: any) => { // Callback de Sucesso
        // O ViaCEP retorna 'erro: true' se o CEP não existe
        if (data.erro) {
          this.errorMessage = 'CEP não encontrado.';
          this.endereco = null;
        } else {
          // Sucesso! Guarda o endereço
          this.endereco = data;
        }
        this.loading = false;
      },
      (error) => { // Callback de Erro
        console.error(error);
        this.errorMessage = 'Ocorreu um erro ao buscar o CEP. Tente novamente.';
        this.loading = false;
      }
    );
  }
}