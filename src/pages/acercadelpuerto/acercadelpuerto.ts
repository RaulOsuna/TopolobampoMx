import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcercadelpuertoUbicacionPage } from '../acercadelpuerto-ubicacion/acercadelpuerto-ubicacion';
import { AcercadelpuertoZonainfluenciaPage } from '../acercadelpuerto-zonainfluencia/acercadelpuerto-zonainfluencia';
import { AcercadelpuertoConectividadPage } from '../acercadelpuerto-conectividad/acercadelpuerto-conectividad';

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
}
