import {Component, ViewContainerRef, ViewChild ,ComponentFactoryResolver} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/take';
import {DefaultComponent} from './default/default.component'
class Profile {
  public constructor(public first: string, public last: string) {
  }

  public lastChanded() {
    return new Date()
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('parent', {read:ViewContainerRef})
  // parent: ViewContainerRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    // const childComponent = this._componentFactoryResolver.resolveComponentFactory(DefaultComponent)
    //
    // setTimeout(() => {
    //   this.parent.createComponent(childComponent)
    // }, 3000)
    //
    // setTimeout(() => {
    //   this.parent.remove(0)
    // }, 5000)
    setTimeout(()=>{
      this.profile2 = new Profile('Stepan', 'Loban');
    })
  }

  public profile1 = new Profile('Igor', 'Nepipenko');
  public profile2 = new Profile('Vova', 'Loban');


  public items: Observable<number> = Observable.timer(100, 100).take(101)
}
