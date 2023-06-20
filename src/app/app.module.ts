import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameGrupos } from './utl/grupos.componet';
import { AlumnoComponent } from './utl/alumno.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasModule } from './utl/formularios/operas-bas/operas-bas.module';
import { DistanciaPuntosModule } from './distancia-puntos/distancia-puntos.module';




@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    AlumnoComponent,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasBasModule,
    DistanciaPuntosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
