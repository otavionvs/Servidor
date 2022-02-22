import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fase3',
  templateUrl: './fase3.component.html',
  styleUrls: ['./fase3.component.css']
})
export class Fase3Component implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  resposta = "";


  alerta(){
    alert ('Direções');
  }

  verificar(){
    if(this.resposta == "Sudoeste" || this.resposta == "sudoeste"){
      this.router.navigate(['/Fase4'])
    }else{
      alert('Erroooouuuu!!!!')
    }
  }
}
