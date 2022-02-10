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
        for(let i = 0; i < this.releases.length; i++){
          this.albums?.push({name: this.releases[i].name, images: this.releases[i].images, artist : this.releases[i].artists});
        }
        this.showAlbums = true;
      }
      console.log(this.albums);
    });

   
  }

}
