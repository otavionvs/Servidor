import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-fase1',
  templateUrl: './fase1.component.html',
  styleUrls: ['./fase1.component.css']
})
export class Fase1Component implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  
  resposta = "";


  alerta(){
    alert ('Línguas!');
  }

  verificar(){
    if(this.resposta == "Latim" || this.resposta == "latim"){
      this.router.navigate(['/Fase2'])
    }else{
      alert('Erroooouuuu!!!!')
    }
  }

}
