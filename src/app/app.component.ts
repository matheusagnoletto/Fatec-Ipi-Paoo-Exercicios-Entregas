import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'fatec-ipi-paoo-exercicio01';
}
=======
  cursos = [
    {curso:"ADS", periodo:	"Vespertino"},
    {curso:"ADS", periodo:	"Noturno"},
    {curso:"Eventos", periodo:	"Matutino"}
  ];
  onAdicionarCurso(novoCurso) {
    this.cursos = [novoCurso, ...this.cursos];
  }

}




>>>>>>> 02e7baf... Entrega 27-08
