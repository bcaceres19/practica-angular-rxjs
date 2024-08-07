import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-component-from-event',
  templateUrl: './component-from-event.component.html',
  styleUrls: ['./component-from-event.component.css']
})
export class ComponentFromEventComponent {

  titulo = "Ejemplo From Event"

  ngOnInit(){
    const element = document.getElementById("elemento");
    if(element){
      const mouseMove = fromEvent(element, 'mousemove');
      mouseMove.subscribe(
        (e:any) => {
            console.log(`Coords x: ${e.clientX}, Y: ${e.clientY}`);
        }
      );
    }
  }


}
