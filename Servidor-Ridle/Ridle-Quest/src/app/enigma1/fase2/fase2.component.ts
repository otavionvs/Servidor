import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-fase2',
  templateUrl: './fase2.component.html',
  styleUrls: ['./fase2.component.css']
})
export class Fase2Component implements OnInit {

  resposta = "";
  contador = 0;
  teste = "";
  imagem = "";
  alert = "";

  constructor(
    private enigma1Service: Enigma1Service,
    private clienteService : ClienteService,
    private router : Router
  ) { }

  ngOnInit() {
    this.clienteService.buscandoCliente(localStorage.getItem('USER'))
    
    .then((resultado2:any) => {
      console.log(resultado2);
      if(localStorage.getItem('Visualizer')){
        resultado2.cliente.ENIGMAOLIMPIANO = localStorage.getItem('Visualizer');
      }
    this.enigma1Service.buscarFase2(resultado2.cliente.ENIGMAOLIMPIANO)
    .then((resultado:any) => {
      console.log(resultado);
      this.teste = resultado.fases.HEAD;
      this.imagem = resultado.fases.IMG;
      this.alert = resultado.fases.DICA;
      this.contador = resultado.fases.ID;

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }).catch(erro => {
    console.log('Erro ao buscar usuarios', erro)
  })
  }

  alerta(){
    alert (this.alert);
  }

  verificar(){
    this.enigma1Service.VerificarFase2(this.resposta, this.contador)
    .then((resultado:any) => {
      
      console.log(resultado.fases.FASE)
      if (resultado.fases) {
        if(localStorage.getItem('Visualizer')){
          this.router.navigate(['Fases']);
        }else{
          this.resposta = "";
          this.trocaFase();
          this.ngOnInit();
        }
        
        
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
    this.clienteService.AtualizarEnigmaOlimpiano(this.contador + 1, localStorage.getItem('USER'))
    .then((resultado:any) => {
      console.log(resultado);

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }

}
