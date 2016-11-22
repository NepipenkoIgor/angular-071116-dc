import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {

  @Input()
  public profile
  // public profile = {
  //   first: 'asdas',
  //   last: 'asdas',
  //   lastChanded: () => new Date()
  // };
}
