import { Component } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-component-tap',
  templateUrl: './component-tap.component.html',
  styleUrls: ['./component-tap.component.css']
})
export class ComponentTapComponent {

  /*
  Los taps son como espias
  */
  titulo:string = "Ejemplo de tap"

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click')

    const positions = clicks.pipe(
      tap(
        ev => console.log('Procesado: ' + ev),
        err => console.log(err),
        () => console.log("Se  completo")
      )
    );

    positions.subscribe(pos => console.log(pos));
  }

}
