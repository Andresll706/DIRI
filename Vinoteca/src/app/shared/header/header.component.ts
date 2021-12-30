import { Component, OnInit } from '@angular/core'
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import { Router } from "@angular/router";
import * as data from '../../../assets/data.json';

interface Wine {
  nombre: string
  id: string
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  WineCtrl = new FormControl();
  filteredWines: Observable<Wine[]>;
  Wines : Wine[] = [];
  wineSelect: Wine | undefined;

  constructor(private router: Router) { 
    this.filteredWines = this.WineCtrl.valueChanges.pipe(
      startWith(''),
      map(Wine => (Wine ? this._filterWines(Wine) : this.Wines.slice())),
    );  
  }

  ngOnInit(): void {
    for(let i = 0; i < 12; i++){
      this.Wines.push({nombre: data[i].nombre , id: data[i].id.toString()});
    }
  }

  private _filterWines(value: string): Wine[] {
    const filterValue = value.toLowerCase();

    return this.Wines.filter((Wine: { nombre: string; }) => Wine.nombre.toLowerCase().includes(filterValue));
  }

  public findWine(){
    this.router.navigate(['wines/'+ this.WineCtrl.value.toString().toLowerCase()]);

  }


}
