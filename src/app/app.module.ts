import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListarContatoComponent } from './contato/listar-contato/listar-contato.component';
import { SalvarContatoComponent } from './contato/salvar-contato/salvar-contato.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, ListarContatoComponent, SalvarContatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAVjnwsV59bRpdBw4vmjNg19vCJUQAe_p0",
      authDomain: "agenda-7f0c6.firebaseapp.com",
      databaseURL: "https://agenda-7f0c6.firebaseio.com",
      projectId: "agenda-7f0c6",
      storageBucket: "agenda-7f0c6.appspot.com",
      messagingSenderId: "1030499179117",
      appId: "1:1030499179117:web:7fda17a0bc11f154"
    }),   AngularFireDatabaseModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
