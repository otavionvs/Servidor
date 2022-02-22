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

  ngOnInit() {
  }

  fase(){
    this.router.navigate(['Fase1'])
  }
}
