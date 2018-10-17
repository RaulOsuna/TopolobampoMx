import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {

  }
  goMenu():void{
    this.navCtrl.push(MenuPage);
  }
}
