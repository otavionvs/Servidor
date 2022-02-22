import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fase4',
  templateUrl: './fase4.component.html',
  styleUrls: ['./fase4.component.css']
})
export class Fase4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resposta = "";


  alerta(){
    alert ('Filha');
  }

  verificar(){
    if(this.resposta == "A-12"){
      alert('Parabéns!!')
    }else{
      alert('Erroooouuuu!!!!')
    }
  }
}
