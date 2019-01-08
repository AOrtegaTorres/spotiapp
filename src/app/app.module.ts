import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

/* Router  importations*/
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

/*Request HTTP*/
import { HttpClientModule } from '@angular/common/http'
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
    NavbarComponent
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
