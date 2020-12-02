import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login : Login = new Login();
  public message :string ;

  constructor() { }

  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.login);
  }

  ngOnInit(): void {
  }

}
