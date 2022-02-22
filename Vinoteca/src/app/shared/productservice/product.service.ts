import { Injectable, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';
import  { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  public products :  any  = (data  as  any).default;

  constructor(private http: HttpClient) {
    // This is intentional
  }

  ngOnInit(): void {
    this.products = data;
  }


  public getProducts(): Array<any> {
    return this.products;
  }

  public getProduct(id: number): any {
    return this.products.find((product: { id: number; }) => product.id == id);
  }


  public findProduct(nombre: string): any {
    return this.products.filter((product: { nombre: string; }) => product.nombre.toLowerCase().includes(nombre));
  }

  get getterProducts(){
    return this.products;
  }
}
