import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  loginForm: FormGroup;
  usernameFieldValue: string = '';
  passwordFieldValue: string = '';
  invalidLogin = false;

  constructor(private formBuilder:FormBuilder,public loginDialog:MatDialog,
    private loginservice: AuthenticationService) {
      this.loginForm = this.formBuilder.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      })
    }

 ngOnInit() {}

  public getErrorMessages() {
     if (this.loginForm.get('username')?.hasError('email')) {
      return 'Ingrese un mail invalido';
     }
     if (this.loginForm.get('password')?.hasError('minLength')) {
      return 'La contraseña debe contener al menos 8 caracteres.'
     }
     return 'Rellene este campo';
  }

  public checkLogin() {
    this.usernameFieldValue = this.loginForm.get('username')?.value;
    this.passwordFieldValue = this.loginForm.get('password')?.value;
    (this.loginservice.authenticate(this.usernameFieldValue,this.passwordFieldValue).subscribe(
      data => {
        console.log(data);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    ));
  }

}