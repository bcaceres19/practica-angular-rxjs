import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-component-interval-timer',
  templateUrl: './component-interval-timer.component.html',
  styleUrls: ['./component-interval-timer.component.css']
})
export class ComponentIntervalTimerComponent {

  title:string = "Interval Y Timer"

  public ngOnInit():void{

    const contador = interval(1000);

    const caja = contador.subscribe((n) => {
      console.log(`Contador: ${n}`);
    });

    const contadorDos = timer(1000)

    const cajaUno = contadorDos.subscribe((n) => {
      console.log(`Trigger: ${n}`);
    })

    const fin = timer(5000);
    fin.subscribe(() => {
      caja.unsubscribe()
      cajaUno.unsubscribe()
    })

  }


}
