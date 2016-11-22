import {
  Component, Input, ChangeDetectionStrategy,
  ChangeDetectorRef, OnInit
} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-on-push',
  templateUrl: './on-push.component.html',
  styleUrls: ['./on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {

  //public profileValue;

  @Input('profile')
  public profileValue
  // public set profile(newValue: any) {
  //   if (!newValue) {
  //     return;
  //   }
  //   this.profileValue = newValue;
  // };

  @Input()
  public items: Observable<number>;

  public counter: number = 0;

  private _subscription: Subscription;


  public constructor(private _changeDetectorRef: ChangeDetectorRef) {

  }

  public ngOnInit() {
    //Observable.fromEvent(window,'resize').subscribe(()=>{})

    // this.items.subscribe(value => {
    //   this.counter++;
    //   if (this.counter % 5 === 0) {
    //     this._changeDetectorRef.markForCheck();
    //   }
    // }, null, () => {
    //   this._changeDetectorRef.markForCheck();
    // })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }
}
