import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-observable',
  templateUrl: './component-observable.component.html',
  styleUrls: ['./component-observable.component.css']
})
export class ComponentObservableComponent {
  title = 'Ejemplo de observables';
  observable:any;

  ngOnInit(){
    this.observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
  }

  rxjsFun(){
    this.observable.subscribe({
      next(x:any) {
        console.log('got value ' + x);
      },
      error(err:any) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
  }

}
