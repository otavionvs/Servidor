import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-ver-fases',
  templateUrl: './ver-fases.component.html',
  styleUrls: ['./ver-fases.component.css']
})
export class VerFasesComponent implements OnInit {

  resposta = "";
  users = [];
  constructor(
    private enigma1Service: Enigma1Service,
    private clienteService : ClienteService,
    private router : Router
  ) { 
    
  }
  
  ngOnInit() {
    localStorage.removeItem('Visualizer');
    this.clienteService.buscandoCliente(localStorage.getItem('USER'))
    .then((resultado2:any) => {
      console.log(resultado2);
    for(let i = 1; i <= resultado2.cliente.ENIGMAORIGINAL; i ++){
      this.enigma1Service.buscarFase(i)
      .then((resultado:any) => {
        console.log(resultado);
        this.users[i-1] = resultado.fases.ID;
      }).catch(erro => {
        console.log('Erro ao buscar usuarios', erro)
      })
    }
    
  }).catch(erro => {
    console.log('Erro ao buscar usuarios', erro)
  })
  }

  voltar(){
    this.router.navigate(['principal'])
  }
  
  fases1(fase){
    this.router.navigate(['Fase1']);
    localStorage.setItem("Visualizer", fase);
  }

  home(){
    this.router.navigate(['principal']);
  }



}
