import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';
import { FatecInfoComponent } from './fatec-info/fatec-info.component';
<<<<<<< HEAD
=======
import { FatecCadastroCursoComponent } from './fatec-cadastro-curso/fatec-cadastro-curso.component';
>>>>>>> 02e7baf... Entrega 27-08

@NgModule({
  declarations: [
    AppComponent,
    FatecCursosComponent,
<<<<<<< HEAD
    FatecInfoComponent
=======
    FatecInfoComponent,
    FatecCadastroCursoComponent
>>>>>>> 02e7baf... Entrega 27-08
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
