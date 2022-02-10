import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  
  @Input() 
  public artist: any;

  constructor() {
    
  }

  ngOnInit(){

  }

}
