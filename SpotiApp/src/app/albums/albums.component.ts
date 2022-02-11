import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
interface Artist {
  name: string;
  id: string;
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
  
  constructor(private router: Router) {}

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
    this.router.navigate(['artists/'+id]);
  }
}
