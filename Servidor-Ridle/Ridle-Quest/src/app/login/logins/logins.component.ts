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
   localStorage.removeItem('USER');
   localStorage.removeItem('Visualizer');
   localStorage.removeItem('ADM');
  }
  
  logar(){
    this.usuarioService.login(this.username, this.password)
    .then((resultado:any) => {
      
      if (resultado.user) {
        if(resultado.user.ADM == 1){
          localStorage.setItem('ADM', this.username);
        }
        localStorage.setItem('USER', this.username);
        this.router.navigate(['/principal']);
        console.log('Deu 2222');
        
      } else {
        alert('Usuário não cadastrado!');
        console.log('Não Deu 2222');
      }

    }).catch(erro => {
      console.log('Erro ao buscar usuarios', erro)
    })
   
      
    
  }


  cadastrar(){
    this.router.navigate(['/cadastro']);
  }
}
  
  

//   logar() {
//     console.log(this.username, this.password);
//     const users = [
//       { login: 'otavio', password: '123' },
//       { login: 'a', password: 'a' },
//     ];

//     const find = users.find(e => e.login == this.username && e.password == this.password);

//     if (find) {
//       localStorage.setItem('USER', this.username);
//       this.router.navigate(['/principal']);
//     } else {
//       alert('Usuário não cadastrado!');
//     }
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
// logar(item){
//   // this.usuarioService.buscarUsuarios()
//   //   .then(resultado => {
//   //     if(resultado.nickname = this.username){
//   //       this.router.navigate(['/principal']);
//   //     }
//   //     console.log('RESULTADO', resultado);
//   //   }).catch(erro => {
//   //     console.log('Erro ao buscar usuarios', erro)
//   //   })

    
// //   fetch('/api/login', {
// //     method: 'POST',
// //     body: JSON.stringify(
// //         {
// //           username: this.username, password: this.password
// //         }
// //     ),
// //     headers: {
// //         "Content-Type": "application/json"
// //     }
// // }).then(function (result) {
// //     return result.json();
// // }).then(function (dados) {

// //   if(dados.user)
// //     console.log(dados, "Deu Certo");
// // }).catch(function (erro) {
// //     console.log(erro);
// // });

// console.log("Deu", item[0].NICKNAME)

// }



