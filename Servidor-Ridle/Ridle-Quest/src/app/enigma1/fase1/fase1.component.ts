import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-fase1',
  templateUrl: './fase1.component.html',
  styleUrls: ['./fase1.component.css']
})
export class Fase1Component implements OnInit {


  resposta = "";
  contador = 1;
  teste = "";
  imagem = "";
  alert = "";

  constructor(
    private enigma1Service: Enigma1Service,
    private clienteService : ClienteService,
    private router : Router
  ) { }

  ngOnInit() {
    this.enigma1Service.buscarFase(this.contador)
    .then((resultado:any) => {
      console.log(resultado);
      this.teste = resultado.fases.HEAD;
      this.imagem = resultado.fases.IMG;
      this.alert = resultado.fases.DICA;
      

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }

  alerta(){
    alert (this.alert);
  }

//{{head}} - aqui é pra por no html

  verificar(){
    this.enigma1Service.VerificarFase(this.resposta, this.contador)
    .then((resultado:any) => {
      
      console.log(resultado.fases.FASE)
      if (resultado.fases) {
        this.resposta = "";
        this.contador = this.contador + 1;
        this.ngOnInit();
        
        trocaFase();
        console.log('Deu 2222');
        
      } else {
        alert('Erroooouuuu!!!!')
        console.log('Não Deu 2222');
      }

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })


  }

  trocaFase(){
    this.clienteService.AtualizarEnigmaOlimpo(2, 1)
    .then((resultado:any) => {
      console.log(resultado);
      
      

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }
  }

}
