import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AcercadelpuertoPage} from '../pages/acercadelpuerto/acercadelpuerto'
import{NegociosPage} from '../pages/negocios/negocios';
import{ServiciosPage} from '../pages/servicios/servicios';
import{AcercadelpuertoUbicacionPage} from '../pages/acercadelpuerto-ubicacion/acercadelpuerto-ubicacion';
import{AcercadelpuertoZonainfluenciaPage} from '../pages/acercadelpuerto-zonainfluencia/acercadelpuerto-zonainfluencia';
import{AcercadelpuertoConectividadPage} from '../pages/acercadelpuerto-conectividad/acercadelpuerto-conectividad';
import{AcercadelpuertoHinterlandPage} from '../pages/acercadelpuerto-hinterland/acercadelpuerto-hinterland';
import{AcercadelpuertoInfraestructuraPage} from '../pages/acercadelpuerto-infraestructura/acercadelpuerto-infraestructura';
import{AcercadelpuertoDistanciasPage} from '../pages/acercadelpuerto-distancias/acercadelpuerto-distancias';
import{AcercadelpuertoActividadesportuariasPage} from '../pages/acercadelpuerto-actividadesportuarias/acercadelpuerto-actividadesportuarias';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AcercadelpuertoPage,
    NegociosPage,
    ServiciosPage,
    AcercadelpuertoUbicacionPage,
    AcercadelpuertoZonainfluenciaPage,
    AcercadelpuertoConectividadPage,
    AcercadelpuertoHinterlandPage,
    AcercadelpuertoInfraestructuraPage,
    AcercadelpuertoDistanciasPage,
    AcercadelpuertoActividadesportuariasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgxDatatableModule,
    IonicImageViewerModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AcercadelpuertoPage,
    NegociosPage,
    ServiciosPage,
    AcercadelpuertoUbicacionPage,
    AcercadelpuertoZonainfluenciaPage,
    AcercadelpuertoConectividadPage,
    AcercadelpuertoHinterlandPage,
    AcercadelpuertoInfraestructuraPage,
    AcercadelpuertoDistanciasPage,
    AcercadelpuertoActividadesportuariasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
