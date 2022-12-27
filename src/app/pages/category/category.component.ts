import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// importamos el archivo
import { ProductsService } from './../../services/products.service'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  // añadimos el limit y el offset para la paginacion
  limit = 10;
  offset = 0;
  products: Product[] = [];

  constructor(
    // se inyecta como un servicio
    private route: ActivatedRoute,
    // aqui inyectamos el productsservice
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // cada ves que se envie un nuevo id se obtendran esos eventos por medio de paramMap
    this.route.paramMap.subscribe(params => {
      // lo que esta entre parentesis debe conincidir con el path category que esta en app-routing.module.ts por ejemplo
      this.categoryId = params.get('id');
      if(this.categoryId){
        // generamos el request para obteber la funcion
        // lo pnemos dentro de un if ya que aqui verificamos que la categoria no sea null
        this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
          .subscribe( data => {
            // le decimos  que los productos van a ser igual a la data que encuentre con esa info
            this.products = data;
          })
      }
    })
  }

}
