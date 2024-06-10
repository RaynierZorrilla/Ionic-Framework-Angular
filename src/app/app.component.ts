import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Sumadora', url: '/sumadora', icon: 'calculator' },
    { title: 'Traductor', url: '/traductor', icon: 'chatbubbles' },
    { title: 'Tabla', url: '/tabla', icon: 'grid' },
    { title: 'Video', url: '/video', icon: 'play' },
  ];

}
