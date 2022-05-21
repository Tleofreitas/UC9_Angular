import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();

  mensagem = "";

  onSubmit(){
    console.log("Modelo:", this.loginModel)

    const listaPalavras: string[] = ["selecte ", "from ", "drop ", "or ", "having ", "group ", "by ", 
    "insert ", "exec ", "\"", "\'", "--", "#", "*"]

    listaPalavras.forEach(palavra => {
      if(this.loginModel.email?.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos" + palavra

        return;
      }
    })

    // console.log(this.loginModel)
    this.loginService.login(this.loginModel).subscribe( (response) => {
      this.mensagem = "Login com Sucesso!";
      this.router.navigateByUrl("/");
      // console.log(response)
    }, (error) => {
      this.mensagem = error.error;
      ;
    }
    ) 
  }

}
