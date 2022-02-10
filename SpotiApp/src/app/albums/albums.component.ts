import { Component, Input, OnInit } from '@angular/core';
import { SpotiService } from '../services/spoti.service';

interface Artist {
  name: string;
  id: string;
}

interface Songs{
  name: string
  albumName: string
  popularity: string
  images: Array<any>
}

interface ArtistSongs{
  artist: Artist
  songs: Array<Songs>
}

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  @Input()
  public albums: any;

  public artists: Artist[] = [];

  @Input()
  public showArtist = false;

  @Input()
  public showAlbums = false;
  
  public artistAlbum: ArtistSongs = {
    artist: { name : "" , id : ""},
    songs: []
  }; 

  constructor(private spoti: SpotiService) {
   
  }

  ngOnInit() {

    console.log("constructor => " + this.albums);
    if (this.albums != undefined) {
      for (let i = 0; i < this.albums.artist.length; i++) {
        this.artists.push({ name: this.albums.artist[i].name, id: this.albums.artist[i].id });
      }
    }

  }

  goArtist(id: string) {
    console.log(id);
    this.spoti.getArtistWithId(id).then((value) => {
      if (typeof value === 'string') {
        let response = JSON.parse(value);
        console.log(response);

        for(let i = 0; i < this.artists.length; i++){
          if(this.artists[i].id == id){
            this.artistAlbum.artist = this.artists[i];
          }
        }

        // for(let i = 0; i < response.tracks.length; i++){
        //   this.artistAlbum.albumes.push({name: response.items[i].name , images : response.items[i].images });
        // }

        console.log(this.artistAlbum);
        
      }
    });
  }
}
