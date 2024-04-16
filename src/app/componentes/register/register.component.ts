import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {

  ngOnInit() {
    this.registerForma.valueChanges.subscribe(value => console.log(value));
  }

  registerForma = this.fb.group({
    fullName: ['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    confirmPassword:['', [Validators.required,]]
  },{
    validators:passwordMatchValidator
  })

  constructor(private fb: FormBuilder, 
    private auth: AuthService,
     private router: Router, 
     private messageService: MessageService
     ) {

     }

     
  get fullName() {
    return this.registerForma.controls['fullName']
  }

  get email() {
    return this.registerForma.controls['email'];
  }

  get password() {
    return this.registerForma.controls['password'];
  }

  get confirmPassword() {
    return this.registerForma.controls['confirmPassword'];
  }
  
  enviarRegistro(){
    console.log(this.confirmPassword.value)
    const data = {...this.registerForma.value}

    delete data.confirmPassword

    this.auth.registerUser(data as User).subscribe(
      response => {
        console.log(response)
        this.messageService.add({ severity: 'success', 
        summary: 'Registro exitoso', 
        detail: 'Se a agregado correctamente' });
        this.router.navigate(['login']);

      },
      error => console.log(error)
      
    )
  }

  getPasswordError() {
    if (this.password.hasError('required')) {
      return 'La contraseña es requerida.';
    }
    if (this.password.hasError('minlength')) {
      return 'La contraseña debe tener al menos 8 caracteres.';
    }
    if (this.password.hasError('pattern')) {
      return 'La contraseña debe tener al menos una letra minúscula, una mayúscula y un carácter especial.';
    }
    return '';
  }
}