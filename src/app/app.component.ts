import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  notificacionAudio = new Audio("../assets/audios/notificacion3.mp3");
  splash = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      if (this.splash) {
        setTimeout(() => {
          this.notificacionAudio.play();
          setTimeout(() => {
            this.pararAlarma();
            this.splash = false;
          }, 5650);
        }, 5300);
      }

    });
  }

  pararAlarma() {
    this.notificacionAudio.pause();
    this.notificacionAudio.currentTime = 0;
  }
}
