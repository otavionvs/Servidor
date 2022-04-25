import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Enigma1Service } from 'src/app/services/enigma1.service';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent implements OnInit {

  constructor(
    private router : Router,
    private enigma1Service: Enigma1Service,
    private clienteService: ClienteService
  ) { }

  fase1 = "";
  fase2 = "";
  fase3 = "";
  contador = 0;

  ngOnInit() {
    localStorage.removeItem('Visualizer');
    if(localStorage.getItem('ADM')){
      this.contador = 1;
    }

    this.clienteService.buscandoCliente(localStorage.getItem('USER'))
    .then((resultado2:any) => {
      console.log(resultado2);
      this.fase1 = resultado2.cliente.ENIGMAORIGINAL;
      this.fase2 = resultado2.cliente.ENIGMAOLIMPIANO;
      this.fase3 = resultado2.cliente.ENIGMACERIMONIAL;
    
  }).catch(erro => {
    console.log('Erro ao buscar usuarios', erro)
  })

  }

  fase(){
    this.router.navigate(['Fase1'])
  }
  fase02(){
    this.router.navigate(['Fase2'])
  }
  fase03(){
    this.router.navigate(['Fase3'])
  }
  telafases(){
    this.router.navigate(['Fases'])
  }
  home(){
    this.router.navigate(['principal']);
  }
  logout(){
    this.router.navigate(['']);
  }
  criarFases(){
    this.router.navigate(['CriarFases']);
  }
  
}
