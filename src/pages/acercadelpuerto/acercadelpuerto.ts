import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcercadelpuertoUbicacionPage } from '../acercadelpuerto-ubicacion/acercadelpuerto-ubicacion';
import { AcercadelpuertoZonainfluenciaPage } from '../acercadelpuerto-zonainfluencia/acercadelpuerto-zonainfluencia';
import { AcercadelpuertoConectividadPage } from '../acercadelpuerto-conectividad/acercadelpuerto-conectividad';
import { AcercadelpuertoHinterlandPage } from '../acercadelpuerto-hinterland/acercadelpuerto-hinterland';
import { AcercadelpuertoDistanciasPage } from '../acercadelpuerto-distancias/acercadelpuerto-distancias';
import { AcercadelpuertoActividadesportuariasPage } from '../acercadelpuerto-actividadesportuarias/acercadelpuerto-actividadesportuarias';

/**
 * Generated class for the AcercadelpuertoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acercadelpuerto',
  templateUrl: 'acercadelpuerto.html',
})
export class AcercadelpuertoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercadelpuertoPage');
  }
  goUbicacion():void{
    this.navCtrl.push(AcercadelpuertoUbicacionPage);
  }
  goZonaInfluencia():void{
    this.navCtrl.push(AcercadelpuertoZonainfluenciaPage);
  }
  goConectividad():void{
    this.navCtrl.push(AcercadelpuertoConectividadPage);
  }
  goHinterland(){
    this.navCtrl.push(AcercadelpuertoHinterlandPage);
  }
  goDistancias(){
    this.navCtrl.push(AcercadelpuertoDistanciasPage);
  }
  goActividadesPortuarias(){
    this.navCtrl.push(AcercadelpuertoActividadesportuariasPage);
  }
}
