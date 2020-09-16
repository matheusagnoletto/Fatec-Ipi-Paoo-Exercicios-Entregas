<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input } from '@angular/core';
>>>>>>> 02e7baf... Entrega 27-08

@Component({
  selector: 'app-fatec-cursos',
  templateUrl: './fatec-cursos.component.html',
  styleUrls: ['./fatec-cursos.component.css']
})
<<<<<<< HEAD
export class FatecCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
=======
export class FatecCursosComponent  {

@Input() curso;
>>>>>>> 02e7baf... Entrega 27-08

}
