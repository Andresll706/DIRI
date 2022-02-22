import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.scss']
})
export class ProductboxComponent implements OnInit {

  @Input()
  public product: any;

  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    // This is intentional
  }

}
