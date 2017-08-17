import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController) {
  }
 irAJugadores() {
    this.navCtrl.setRoot(ListMasterPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
  

}
