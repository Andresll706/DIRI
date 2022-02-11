import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiService } from '../services/spoti.service';

interface Artist {
  name: string;
  id: string;
}

interface Songs {
  name: string
  albumName: string
  popularity: string
  images: Array<any>
}

interface ArtistSongs {
  artist: Artist
  songs: Array<Songs>
}


@Component({
  selector: 'artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {


  @Input()
  public artist: any;

  public artistAlbum: ArtistSongs = {
    artist: { name: "", id: "" },
    songs: []
  };

  constructor(private spoti: SpotiService, private route: ActivatedRoute) {
    this.route.params.subscribe(parameters => {
      let id = parameters['id'];
      if (id) {
        this.spoti.getArtistWithId(id).then((value) => {
          if (typeof value === 'string') {
            let response = JSON.parse(value);
            console.log(response);

            // for(let i = 0; i < this.artists.length; i++){
            //   if(this.artist[i].id == id){
            //     this.artistAlbum.artist = this.artists[i];
            //   }
            // }

            // for(let i = 0; i < response.tracks.length; i++){
            //   this.artistAlbum.songs.push({name: response.tracks[i].name , albumName : response.tracks[i].album.name , popularity: response.tracks[i].popularity , images: response.tracks[i].album.images});
            // }

            console.log(this.artistAlbum);

          }
        });
      }
    });
  }

  ngOnInit() {

  }


}
