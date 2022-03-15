import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Enigma1Service } from 'src/app/services/enigma1.service';


@Component({
  selector: 'app-fase1',
  templateUrl: './fase1.component.html',
  styleUrls: ['./fase1.component.css']
})
export class Fase1Component implements OnInit {

  constructor(
    private enigam1Service: Enigma1Service,
    private router : Router
  ) { }

  ngOnInit() {

  }
  
  resposta = "";
  contador = 1;


  alerta(){
    alert ('Línguas!');
  }

//{{head}} - aqui é pra por no html

  verificar(){
    this.enigam1Service.VerificarFase(this.resposta, this.contador)
    .then((resultado:any) => {
      
      console.log(resultado.fase)
      if (resultado.fases) {
        //localStorage.setItem('USER', this.username);
        this.router.navigate(['/Fase2'])
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
