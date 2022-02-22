import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fase2',
  templateUrl: './fase2.component.html',
  styleUrls: ['./fase2.component.css']
})
export class Fase2Component implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  
  resposta = "";


  alerta(){
    alert ('𝄞 Garota 𝄞');
  }

  verificar(){
    if(this.resposta == "Poema" || this.resposta == "poema"){
      this.router.navigate(['/Fase3'])
    }else{
      alert('Erroooouuuu!!!!')
    }
  }

}
