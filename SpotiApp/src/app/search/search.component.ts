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
    //This is intentional
  }

  searchArtist(artist: any) {
    this.albums = [];
    this.spoti.getArtists(artist).then((value) => {
      if (typeof value === 'string') {
        let response = JSON.parse(value);
        console.log(response);
        if (response != undefined) {
          console.log(response.artists.items);
          for (let item of response.artists.items) {
            let art: any = [];
            art.push({ 'name': item.name, 'id': item.id });
            this.albums.push({ name: item.name, images: item.images, artist: art });
          }
        }
        console.log(this.albums);
        this.showAlbums = true;
      }
    }).catch((reason:any)=>{console.log("Network Error")});
  }
}
