import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.componet';
import { AlumnoComponent } from './utl/alumno.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    AlumnoComponent,
    IdgsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
