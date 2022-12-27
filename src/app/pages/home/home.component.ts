import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { Product } from '../../models/product.model';

// agregamos todas las cosas que ocupa nuestro ngOnInit
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
    limit = 10;
    offset = 0;

  constructor(
    private   productsService: ProductsService,
  ) { }

 ngOnInit(): void {
    this.productsService.getAll(10, 0).subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    });
  }

// aca esta la funcion que hace la funcionalidad de mostrar mas productos
  onLoadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
  // this.products contiene el array de productos y se le concatena en si mismo los demas productos que se estan pidiendo
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
  }

}
