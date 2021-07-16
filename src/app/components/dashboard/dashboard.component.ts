import { Component, NgModule, OnInit } from '@angular/core';
import { formatDate} from '@angular/common'
import { faSun, faMoon, faUserCheck, faBox, faUsers, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
//import { Cliente } from 'src/app/models/cliente/cliente.module';
//import { TokenService } from 'src/app/service/token.service';
//import { Producto } from 'src/app/models/producto/producto.module';
//import { Usuario } from 'src/app/models/usuario/usuario.module';
//import { Pedido } from 'src/app/models/pedido/pedido.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faSaludo = faSun;
  faBox = faBox;
  faUsers = faUsers;
  faTrunk = faTruck;
  faUser = faUser;
  faUserCheck = faUserCheck;
  saludo: any = [];
  saludo_:any = {}
  today = Date.now();
  //pedidos : Pedido[] = [];
  //clientes : Cliente[] = [];
  //productos : Producto[] = [];
  //usuarios : Usuario[] = [];
  roles: string = "";
  name: string = "";
  username: string = "";
  date = "";

  constructor() { }

  ngOnInit(): void {
    this.date = formatDate(this.today, 'HH:MM', 'en-ES', 'UTC−0300');
    this.saludo_ = this.saludo_;
    this.saludo.push(this.saludar());


    this.roles = "Administrador"
    this.name = "Test"
    this.username = "Test"

    //this.name = this.tokenService.getName()

    //this.roles = this.tokenService.getAuthorities();
    //this.username = this.tokenService.getUserName();
    //if(this.roles != "Administrador" && this.roles != "SuperAdministrador"){
      //document.getElementById("tarjeta1").classList.remove("col-xl-3");
      //document.getElementById("tarjeta1").classList.add("col-xl-4");

      //document.getElementById("tarjeta2").classList.remove("col-xl-3");
      //document.getElementById("tarjeta2").classList.add("col-xl-4");

      //document.getElementById("tarjeta3").classList.remove("col-xl-3");
      //document.getElementById("tarjeta3").classList.add("col-xl-4");

      //document.getElementById("tarjeta4").style.display = "none";
    //}

  }

  saludar(){
    if (this.date <= '12:00' && this.date >= '06:00'){
      this.saludo_="Buenos Días";
      this.faSaludo = faSun;
    }else if ( this.date >'12:00' && this.date<= '20:00'){
      this.saludo_="Buenas Tardes";
      this.faSaludo = faSun;
    }else{
      this.saludo_ = "Buenas Noches";
      this.faSaludo = faMoon;
    }
    return this.saludo_;
  }

}
