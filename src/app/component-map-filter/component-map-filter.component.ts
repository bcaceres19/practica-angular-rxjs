import { Component } from '@angular/core';
import { filter, map, of, pipe } from 'rxjs';

@Component({
  selector: 'app-component-map-filter',
  templateUrl: './component-map-filter.component.html',
  styleUrls: ['./component-map-filter.component.css']
})
export class ComponentMapFilterComponent {

  titulo:string = "Ejemplo de map y filter"

  ngOnInit(): void {

    //of() -> Crea una lista de elementos
    const nums = of(1,2,3,4,5)

    //pipe() -> Funciona x cantidad de observables en su interior
    const alCuadrado = pipe(
      filter((n:number) => n % 2 !== 0),
      map(n => n*n)
    );

    const cuadrado = alCuadrado(nums);

    cuadrado.subscribe( x => console.log(x));
  }
}
