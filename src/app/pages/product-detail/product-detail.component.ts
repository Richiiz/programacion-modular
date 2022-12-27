import { Component, OnInit } from '@angular/core';
// importamos el servicio para poder usar la navegacion en ruta
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from './../../services/products.service'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  // en caso de no encontrar el producto en especifico muestra un null
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // cada ves que se envie un nuevo id se obtendran esos eventos por medio de paramMap
    this.route.paramMap
    .pipe(
      switchMap((params) => {
         this.productId = params.get('id');
        if(this.productId){
          return this.productsService.getOne(this.productId);
        }
        return [null];
      })
    )
    .subscribe((data) => {
            // le decimos  que los productos van a ser igual a la data que encuentre con esa info
            this.product = data;
          });
        }
        goToBack() {
      // funcion para regresar atras con location
          this.location.back();
        }
}
