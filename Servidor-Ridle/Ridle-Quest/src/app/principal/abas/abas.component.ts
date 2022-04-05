import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  contador = 0;

  ngOnInit() {
    localStorage.removeItem('Visualizer');
    if(localStorage.getItem('ADM')){
      this.contador = 1;
    }
  }

  fase(){
    this.router.navigate(['Fase1'])
  }
  telafases(){
    this.router.navigate(['Fases'])
  }
  home(){
    this.router.navigate(['principal']);
  }
}
