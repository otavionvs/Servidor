import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarioService.buscarUsuarios()
    .then(resultado => {
      console.log('RESULTADO', resultado);
    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
  }

  //logar() {
  //   console.log(this.username, this.password);
  //   const users = [
  //     { login: 'otavio', password: '123' },
  //     { login: 'a', password: 'a' },
  //   ];

  //   const find = users.find(e => e.login == this.username && e.password == this.password);

  //   if (find) {
  //     localStorage.setItem('USER', this.username);
  //     this.router.navigate(['/principal']);
  //   } else {
  //     alert('Usuário não cadastrado!');
  //   }
  // }

//   fetch('/api/login', {
//     method: 'POST',
//     body: JSON.stringify(
//         {
//           username: "Otavio", password: "Tavin"
//         }
//     ),
//     headers: {
//         "Content-Type": "application/json"
//     }
// }).then(function (result) {
//     return result.json();
// }).then(function (dados) {

//   if(dados.user)
//     console.log(dados);
// }).catch(function (erro) {
//     console.log(erro);
// });
}
