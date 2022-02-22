import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../services/spoti.service';


interface Albums {
  name: string
  images: any
  artist: Array<any>
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public albums: Albums[] = [];

  public showAlbums = false;

  public search!: string;

  public error = false;

  constructor(private spoti: SpotiService) { }

  ngOnInit(): void {
    //This is intentional
  }

  searchArtist(artist: any) {
    this.albums = [];
    this.spoti.getArtists(artist).then((value) => {
      if (typeof value === 'string') {
        let response = JSON.parse(value);
        if (response != undefined) {
          for (let item of response.artists.items) {
            let art: any = [];
            art.push({ 'name': item.name, 'id': item.id });
            this.albums.push({ name: item.name, images: item.images, artist: art });
          }
        }
        this.showAlbums = true;
        this.error = false;
      }
    }).catch((reason:any)=>{
      console.log("Network Error")
      this.error = true;
    });
  }
}
