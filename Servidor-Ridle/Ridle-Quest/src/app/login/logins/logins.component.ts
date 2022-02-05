import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logar() {
    console.log(this.username, this.password);
    const users = [
      { login: 'otavio', password: '123' },
      { login: 'a', password: 'a' },
    ];

    const find = users.find(e => e.login == this.username && e.password == this.password);

    if (find) {
      localStorage.setItem('USER', this.username);
      this.router.navigate(['/principal']);
    } else {
      alert('Usuário não cadastrado!');
    }
  }
}
