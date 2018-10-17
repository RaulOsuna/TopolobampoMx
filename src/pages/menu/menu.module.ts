import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { AcercadelpuertoPage} from '../acercadelpuerto/acercadelpuerto'

@NgModule({
  declarations: [
    MenuPage,
    AcercadelpuertoPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
    IonicPageModule.forChild(AcercadelpuertoPage),
  ],
})
export class MenuPageModule {}
