import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';


@Component({
  selector: 'app-fase1',
  templateUrl: './fase1.component.html',
  styleUrls: ['./fase1.component.css']
})
export class Fase1Component implements OnInit {


  resposta;
  contador = 1;
  teste = "";
  imagem = "";
  alert = "";

  constructor(
    private enigam1Service: Enigma1Service,
    private router : Router
  ) { }

  ngOnInit() {
    this.enigam1Service.buscarFase(this.contador)
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
    this.enigam1Service.VerificarFase(this.resposta, this.contador)
    .then((resultado:any) => {
      
      console.log(resultado.fases.FASE)
      if (resultado.fases) {
        this.contador = this.contador + 1;
        this.ngOnInit();
        
        console.log('Deu 2222');
        
      } else {
        alert('Erroooouuuu!!!!')
        console.log('Não Deu 2222');
      }

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })


  }

}
