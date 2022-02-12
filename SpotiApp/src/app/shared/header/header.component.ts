import { Component, OnInit } from '@angular/core';
import { SpotiService } from 'src/app/services/spoti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private Spoti: SpotiService) {
   
  }

  ngOnInit() {

  }

  artistas(){
    let respuesta = this.Spoti.getArtists("a");
    console.log(respuesta);
  }

  realeses(){
    let respuesta = this.Spoti.getNewReleases();
    console.log(respuesta);
  }
}
