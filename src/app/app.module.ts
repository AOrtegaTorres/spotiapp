import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component'

/* Router  importations*/
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

/*Request HTTP*/
import { HttpClientModule } from '@angular/common/http';

// Pipes
import { NoimagesPipe } from './pipes/noimages.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
/*
pedido.
client_ID: d6b55734aa3f4b49af89ae8023b6c69e
client_secret: 4659ca881ead4eed81c45197f071db34
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CardComponent,
    LoadingComponent,
    ArtistaComponent,
    NoimagesPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
