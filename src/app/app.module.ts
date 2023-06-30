import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.componet';
import { AlumnoComponent } from './utl/alumno.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasModule } from './utl/formularios/operas-bas/operas-bas.module';
import { DistanciaPuntosModule } from './distancia-puntos/distancia-puntos.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    AlumnoComponent,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe,
    AlumnoReactiveComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasBasModule,
    DistanciaPuntosModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
