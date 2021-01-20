import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css']
})
export class ExemplosAngularComponent  {
  @Input()
  nomeAluno = 'Alvaro';

  @Input()
  listaAlunos!:Alunos;
  turma = "Angular";

  @Output() 
  selecaoTurma = new EventEmitter<string>(); 

  @Input()
  switch = true;

  atualizaTurma(input:any) {
    console.log('botao');
    console.log(this.listaAlunos);
    this.turma = input.value ;
    this.selecaoTurma.emit(this.turma)
  }
  
  switchTurma(){
    console.log('switich');
    
  }
}
