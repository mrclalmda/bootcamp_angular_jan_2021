import { Component } from '@angular/core';
import { Aluno, Alunos } from './alunos';

const URL = 'http://api.com'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste Angular';
  nome='Gabriel'

  alunos: Alunos = [
    {nome:'Alvaro', dataNascimento:'1987-11-06'},
    {nome:'GAbriel', dataNascimento:'1999-11-11'}
  ]

  numero1 = 5
  numero2 = 10

  alertaTurma(turma:string){
    alert(`Turma ${turma} selecionada`)
  }
}
