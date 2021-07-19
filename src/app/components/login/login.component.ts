import { Component, OnInit } from '@angular/core';

import{UrlService} from 'src/app/service/url.service'
import { Router } from '@angular/router';
import {LoginUsuario} from 'src/app/models/login-usuario'
import {TokenService} from 'src/app/service/token.service'
import {LoginService} from 'src/app/service/login.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;

  username: string;
  password: string;

  roles: string[] =[];
  errMsj: string;

  constructor(private tokenService : TokenService,
    private urlService: UrlService,
    private loginService : LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){

  }
}
