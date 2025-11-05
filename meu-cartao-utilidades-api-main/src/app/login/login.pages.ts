import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  form: FormGroup;
  isRegister = false;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cep: [''],
      rua: [''],
      bairro: [''],
      cidade: [''],
      uf: [''],
    });
  }

  toggleMode() {
    this.isRegister = !this.isRegister;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log('Login', this.form.value);
  }

  register() {
    console.log('Cadastrar', this.form.value);
  }

  buscarCep() {
    console.log('Buscar CEP:', this.form.get('cep')?.value);
  }
}
