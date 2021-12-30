import { Component, OnInit } from '@angular/core';
import {ProductService} from "../shared/productservice/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: any;

  constructor(protected productService: ProductService,protected route: ActivatedRoute) {
      this.route.params.subscribe(parameters => {
        let productId = parameters['productId'];
        this.product = this.productService.getProduct(productId);
      });
  }

  ngOnInit(): void {
  }

}
