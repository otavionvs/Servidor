import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome = "";
  email = "";
  username = "";
  password = "";

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  Registrar(){
    this.usuarioService.cadastro(this.nome, this.email, this.username, this.password)
    .then((resultado:any) => {
      
      this.router.navigate(['']);

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
    
  }

  Limpar(){
    this.nome = "";
    this.email = "";
    this.username = "";
    this.password = "";

  }



}
