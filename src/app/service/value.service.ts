import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  selected = false;

  private valueSubject: BehaviorSubject<{ id: string, name: string, selected: boolean }[]> =
    // new BehaviorSubject({id: "", name: "", selected: this.selected});
    new BehaviorSubject([{id: "", name: "", selected: this.selected}]);

  constructor() {
    console.log("Value Service Created");
  }

  public getValue(): Subject<{ id: string, name: string, selected: boolean }[]> {
    return this.valueSubject;
  }

  public updateValue(value: { id: string, name: string, selected: boolean }[]) {
    this.valueSubject.next(value);    // notify
  }
}
