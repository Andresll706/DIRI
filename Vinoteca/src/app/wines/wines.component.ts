import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/productservice/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent implements OnInit {

  public products: Array<any>;

  constructor(protected productService: ProductService, private route: ActivatedRoute) {
    this.products = this.productService.getProducts();

    this.route.params.subscribe(parameters => {
      let searchProducts = parameters['searchProducts'];
      if(searchProducts){
        this.products = this.productService.findProduct(searchProducts);
      }
    });
  }

  ngOnInit(): void {
  }

}
