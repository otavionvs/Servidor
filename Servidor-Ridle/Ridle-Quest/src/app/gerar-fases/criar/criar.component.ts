import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  contador = 0;

  ngOnInit() {
  }
  
  voltar(){
    this.router.navigate(['principal'])
  }

  home(){
    this.router.navigate(['principal']);
  }

}
