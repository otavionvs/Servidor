import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';

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
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.removeItem('Visualizer');
  }

  Registrar(){
    if(this.nome != "" && this.email != "" && this.username != "" && this.password != ""){
      this.usuarioService.cadastro(this.nome, this.email, this.username, this.password)
      .then((resultado) => {

        this.router.navigate(['']);
  
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })

      this.clienteService.cadastro(this.username)
      .then((resultado) => {
  
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })

    }else{
      alert("É necessario preencher todos os campos!")
    }
    
    
  }

  Limpar(){
    this.nome = "";
    this.email = "";
    this.username = "";
    this.password = "";

  }

  voltar(){
    this.router.navigate(['']);
  }



}
