import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../services/spoti.service';

interface Albums {
  name: string
  images: any
  artist: Array<any>
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public releases: Array<any> | undefined;

  public albums: Albums[] = [];

  public showAlbums = false;

  constructor(private spoti: SpotiService) { }

  ngOnInit() {
    this.spoti.getNewReleases().then((value) => {
      if (typeof value === 'string') {
        let v = JSON.parse(value);
        console.log(v);
        this.releases = v.albums.items;
        console.log(this.releases);
      }

      if (this.releases != undefined) {
        for(let release of this.releases){
          this.albums?.push({name: release.name, images: release.images, artist : release.artists});
        }
        this.showAlbums = true;
      }
      console.log(this.albums);
    }).catch((reason:any)=>{console.log("Network Error")});


  }

}
