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

  constructor(private spoti: SpotiService) { }

  ngOnInit(): void {
  }

  searchArtist(artist: any) {
    console.log(artist);
    this.albums = [];
    this.spoti.getArtists(artist).then((value) => {
      if (typeof value === 'string') {
        let response = JSON.parse(value);
        console.log(response);
        if (response != undefined) {
          console.log(response.artists.items);
          for (let i = 0; i < response.artists.items.length; i++) {
            let art: any = [];
            art.push({ 'name': response.artists.items[i].name, 'id': response.artists.items[i].id });
            this.albums.push({ name: response.artists.items[i].name, images: response.artists.items[i].images, artist: art });
          }
        }
        console.log(this.albums);
        this.showAlbums = true;
      }
    });
  }
}
