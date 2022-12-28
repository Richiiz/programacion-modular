import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// con switchMap evitamos
import { switchMap } from 'rxjs/operators';
// importamos el archivo
import { ProductsService } from './../../services/products.service'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category',
  // le añadimos la linea de codigo del html ya que al ser solo una linea es mucho para un html, en caso de que haya mas logica
  // ahora si se tendria que implementar en un html
  template: `<app-products [products]="products" (loadMore)="onLoadMore()"></app-products>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: Product[] = [];
  // añadimos el limit y el offset para la paginacion
  limit = 10;
  offset = 0;
  categoryId: string | null = null;
  productId: string | null = null;

  constructor(
    // se inyecta como un servicio
    private route: ActivatedRoute,
    // aqui inyectamos el productsservice
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // cada ves que se envie un nuevo id se obtendran esos eventos por medio de paramMap
    this.route.paramMap
    .pipe(
      switchMap((params) => {
         this.categoryId = params.get('id');
        if(this.categoryId){
          return this.productsService.getByCategory(
            this.categoryId,
            this.limit,
            this.offset
          );
        }
        return [];
      })
    )
    .subscribe((data) => {
      // le decimos  que los productos van a ser igual a la data que encuentre con esa info
      this.products = data;
      });
        this.route.queryParamMap.subscribe((params) => {
        this.productId = params.get('product');
      });
      }
      onLoadMore() {
        if (this.categoryId) {
          this.productsService
          .getByCategory(this.categoryId, this.limit, this.offset)
          .subscribe((data) => {
            this.products = this.products.concat(data);
            this.offset += this.limit;
          })
        }
      }

}
